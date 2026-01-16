import express from 'express';
import { 
    purchaseTickets, 
    getUserTickets, 
    openTicket,
    generateTicketId 
} from '../controllers/ticketController.js';

const router = express.Router();

// Сугалаа худалдаж авах
router.post("/purchase", purchaseTickets);

// Сугалааны жагсаалт авах (session эсвэл local storage ашиглан)
router.post("/my-tickets", getUserTickets);

// Сугалаа нээх
router.post("/open/:ticketId", openTicket);

// Туршилтын сугалааны ID үүсгэх
router.get("/generate-id", generateTicketId);

export default router;