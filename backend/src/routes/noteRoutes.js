import express from 'express';
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notesController.js';
import multer from 'multer';

const router = express.Router();

// Configure multer with file validation
const fileFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, JPG, PNG, GIF and WebP are allowed.'));
    }
};

/*
const fileFilter = (req,file,cb)=>{
    const allowedTypes=['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true);
    } else {
        cb(new Error("Invalid"));    
    }
}

const upload= multer({
    storage: multer.memoryStorage(),
    limits: {fileSize: 5*1024*1024},
    fileFilter: fileFilter
});

*/

const upload = multer({ 
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: fileFilter
});

router.post("/", upload.single("profile"), createNote);
router.put("/:id", upload.single("profile"), updateNote);
router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.delete("/:id", deleteNote);

export default router;