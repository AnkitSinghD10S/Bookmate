import express from "express";
import { User } from "../models/userModel.js";
import verifyJWT from '../verifyJWT.js'
import { upload } from "../multer.js";
import { uploadCloudinary } from "../cloudinary.js";
const router = express.Router();

router.post("/signup", upload.fields([{name: 'avatar', maxCount: 1}]), async (req, res) => {
    try {
        const { name, email, password, isBuyer } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const userOld = await User.findOne({ email: email });
        if (userOld) {
            return res.status(400).json({ message: "User already exists" });
        }

        let avatar = null;
        if (req.files?.avatar && Array.isArray(req.files.avatar) && req.files.avatar[0]) {
            try {
                const avatarUploadResult = await uploadCloudinary(req.files.avatar[0].path);
                if (!avatarUploadResult?.url) {
                    return res.status(500).json({ message: "Failed to upload avatar." });
                }
                avatar = avatarUploadResult.url;
            } catch (uploadError) {
                console.error("Avatar Upload Error:", uploadError);
                return res.status(500).json({ message: "Error uploading avatar." });
            }
        }

        const user = new User({
            name,
            email,
            password,
            isBuyer,
            avatar
        });

        const savedUser = await user.save();
        console.log(savedUser);

        if (!savedUser) {
            return res.status(500).json({ message: "Something went wrong during user creation" });
        }

        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error in signup:", error);
        res.status(500).json({ message: "Server error" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    let user = await User.findOne({ email }).populate({
        path: "savedBook",
        select: "bookName bookAuthorName publishedYear bookImage bookLink"
    })
    
    
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    const validPassword = await user.isPasswordCorrect(password);
    if (validPassword) {
        const accessToken = await user.generateAccessToken();
        user = await User.findById(user._id).select("-password");
        return res
            .status(200)
            .cookie("accessToken", accessToken, { httpOnly: true, secure: true })
            .json({ message: "Login Successfully", user });
    } else {
        return res.status(400).json({ error: "Input details do not match" });
    }
});

router.get("/logout",verifyJWT, async(req, res) => {
    const user = req.user;
    if(user){
        res.status(201).
        clearCookie("accessToken").
        json({message:"User Logout Successfully"})
    }
    else{
        return res.status(402).json({message:"Something went wrong during logout User"})
    }
});

router.patch("/updateDetails", verifyJWT, async (req, res) => {
    try {
        const user = req.user;
        const { name, email } = req.body;
        const updatedDetails = {};

        if (name) updatedDetails.name = name;
        if (email) updatedDetails.email = email;
        let avatar = null;

        if (req.files?.avatar && Array.isArray(req.files.avatar) && req.files.avatar[0]) {
            try {
                const avatarUploadResult = await uploadCloudinary(req.files.avatar[0].path);
                if (!avatarUploadResult?.url) {
                    return res.status(500).json({ message: "Failed to upload avatar." });
                }
                avatar = avatarUploadResult.url;
            } catch (uploadError) {
                console.error("Avatar Upload Error:", uploadError);
                return res.status(500).json({ message: "Error uploading avatar." });
            }
        }

        if (avatar) updatedDetails.avatar = avatar;
        const updatedUser = await User.findByIdAndUpdate(user.id, updatedDetails, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found." });
        }

        res.status(200).json({ message: "User details updated successfully.", user: updatedUser });
    } catch (error) {
        console.error("Update Error:", error);
        return res.status(500).json({ message: "Something went wrong while updating user details." });
    }
});
export default router;
