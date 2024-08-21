import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const uploadToCloudinary = async (fullName, fileBuffer, type) => {
    const publicId = `${fullName}_${type}`;
    
    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });
    
    // Upload the file buffer
    const uploadResult = await cloudinary.uploader
        .upload_stream(
            { public_id: publicId },
            (error, result) => {
                if (error) {
                    console.log(error);
                    throw error;
                }
                return result;
            }
        )
        .end(fileBuffer);
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url(publicId, {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url(publicId, {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);
    return autoCropUrl;
};