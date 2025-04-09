import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import mime from 'mime-types';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET,
});

const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const mimeType = mime.lookup(localFilePath);
    if (mimeType === "application/pdf") {
      // Handle PDFs by saving them locally
      const publicFolderPath = path.join(__dirname, './public/uploads');

      // Ensure the public/uploads directory exists
      if (!fs.existsSync(publicFolderPath)) {
        fs.mkdirSync(publicFolderPath, { recursive: true });
        console.log("Created public/uploads directory.");
      }

      const fileName = path.basename(localFilePath);
      const destinationPath = path.join(publicFolderPath, fileName);

      // Copy the file to the public/uploads folder
      fs.copyFileSync(localFilePath, destinationPath);
      console.log(`PDF saved locally at: ${destinationPath}`);

      // Generate the correct public URL
      const secure_url = `${process.env.BASE_URL}/uploads/${fileName}`;
      console.log(`Public URL for PDF: ${secure_url}`);

      // Delete the temporary file
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }

      return { secure_url };
    } else {
      // Handle other file types (e.g., images) by uploading to Cloudinary
      let resourceType = "auto";
      if (mimeType?.startsWith("image/")) {
        resourceType = "image";
      }

      console.log("Uploading file with resource type:", resourceType);

      const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type: resourceType,
        type: "upload",
      });

      console.log("Cloudinary Upload Response:", response);

      // Delete the temporary file
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }

      return response;
    }
  } catch (error) {
    console.error("Cloudinary Upload Error:", error.message || error);
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    throw new Error("Failed to upload file");
  }
};

export { uploadCloudinary, cloudinary };
