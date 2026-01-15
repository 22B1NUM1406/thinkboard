import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    profile: {
        type: String, 
        default: null
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Note = mongoose.model("Note", noteSchema);
export default Note;