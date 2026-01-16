import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    ticketId: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
        default: 100
    },
    number: {  // Шинэ талбар: гарч ирэх тоо (0-9)
        type: Number,
        required: true,
        min: 0,
        max: 9
    },
    isWinner: {
        type: Boolean,
        default: false
    },
    prizeAmount: {
        type: Number,
        default: 0
    },
    purchaseTime: {
        type: Date,
        default: Date.now
    }
}, { 
    timestamps: true 
});

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket;