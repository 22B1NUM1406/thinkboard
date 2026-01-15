import Note from '../models/Note.js';

export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNoteById controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;

        if (!title.trim() || !content.trim()) {
            return res.status(400).json({ message: "All fields are required" });
        }

        let profileImage = null;
        if (req.file) {
            // Validate file size
            if (req.file.size > 5 * 1024 * 1024) {
                return res.status(400).json({ message: "File size must be less than 5MB" });
            }

            // Convert to base64 data URL
            const base64Image = req.file.buffer.toString('base64');
            profileImage = `data:${req.file.mimetype};base64,${base64Image}`;
        }

        const newNote = new Note({
            title,
            content,
            profile: profileImage
        });

        const note = await newNote.save();
        res.status(201).json(note);
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const { id } = req.params;

        // Validation
        if (title !== undefined && !title.trim()) {
            return res.status(400).json({ message: "Title cannot be empty" });
        }

        if (content !== undefined && !content.trim()) {
            return res.status(400).json({ message: "Content cannot be empty" });
        }

        const updateData = {};
        if (title) updateData.title = title;
        if (content) updateData.content = content;

        // Handle profile image update
        if (req.file) {
            if (req.file.size > 5 * 1024 * 1024) {
                return res.status(400).json({ message: "File size must be less than 5MB" });
            }

            const base64Image = req.file.buffer.toString('base64');
            updateData.profile = `data:${req.file.mimetype};base64,${base64Image}`;
        }

        const updatedNote = await Note.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({ message: "Note not found" });
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Error in deleteNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
}