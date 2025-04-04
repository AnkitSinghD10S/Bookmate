import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import mime from 'mime-types';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API,
  api_secret: process.env.CLOUD_SECRET
});

const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const mimeType = mime.lookup(localFilePath);
    let resourceType = "auto";

    if (mimeType === "application/pdf") {
      resourceType = "raw";
    } else if (mimeType?.startsWith("image/")) {
      resourceType = "image";
    }

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: resourceType,
    });

    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return response;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    throw new Error("Failed to upload to Cloudinary");
  }
};

export { uploadCloudinary, cloudinary };
