import multer from 'multer';

// Set up storage for multer
const storage = multer.memoryStorage(); // Store files in memory as buffers

// Set up multer options
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5 MB (adjust as needed)
});

export default upload;