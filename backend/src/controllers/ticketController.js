import Ticket from '../models/Ticket.js';

// Сугалааны ID үүсгэх
function generateUniqueTicketId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 5);
    return `${Date.now().toString().slice(-6)}-${random.toUpperCase()}`;
}

// 0-9 хооронд санамсаргүй тоо үүсгэх
function generateRandomNumber() {
    return Math.floor(Math.random() * 10); // 0-9
}

// Тооны дагуу хожсон дүнг тодорхойлох
function determinePrize(number) {
    const prizeMap = {
        0: 0,      // 0 бол хожоогүй
        1: 100,    // 1 бол 100₮
        2: 200,    // 2 бол 200₮
        3: 300,    // 3 бол 300₮
        4: 500,    // 4 бол 500₮
        5: 1000,   // 5 бол 1000₮
        6: 2000,   // 6 бол 2000₮
        7: 5000,   // 7 бол 5000₮
        8: 10000,  // 8 бол 10000₮
        9: 20000   // 9 бол 20000₮
    };
    return prizeMap[number] || 0;
}

// Сугалаа худалдаж авах (ШУУД ТОО ГАРГАХ)
export async function purchaseTickets(req, res) {
    try {
        const { amount } = req.body;
        
        if (!amount || amount < 800) {
            return res.status(400).json({ 
                success: false,
                message: "Хамгийн багадаа 800₮ мөнгө оруулна уу (8 сугалааны үнэ)" 
            });
        }

        const ticketPrice = 100;
        const ticketCount = Math.floor(amount / ticketPrice);
        
        if (ticketCount < 8) {
            return res.status(400).json({ 
                success: false,
                message: "Хамгийн багадаа 8 ширхэг сугалаа худалдаж авна" 
            });
        }

        // Сугалаа үүсгэх - ШУУД ТОО ГАРГАХ
        const tickets = [];
        let totalWon = 0;
        
        for (let i = 0; i < ticketCount; i++) {
            const number = generateRandomNumber();
            const prizeAmount = determinePrize(number);
            const isWinner = prizeAmount > 0;
            totalWon += prizeAmount;
            
            const newTicket = new Ticket({
                ticketId: generateUniqueTicketId(),
                price: ticketPrice,
                number: number,           // ТОО
                isWinner: isWinner,       // ХОЖСОН ЭСЭХ
                prizeAmount: prizeAmount, // ХОЖСОН ДҮН
                isOpened: true,          // ШУУД НЭЭГДСЭН
                purchaseTime: new Date()
            });
            
            const savedTicket = await newTicket.save();
            tickets.push(savedTicket);
        }

        res.status(201).json({
            success: true,
            message: `${ticketCount} ширхэг сугалаа амжилттай худалдаж авлаа`,
            tickets: tickets.slice(0, 8), // Зөвхөн эхний 8-ыг буцаана
            totalPaid: ticketCount * ticketPrice,
            change: amount - (ticketCount * ticketPrice),
            totalWon: totalWon  // НИЙТ ХОЖСОН ДҮН
        });

    } catch (error) {
        console.error("Сугалаа худалдаж авах алдаа:", error);
        res.status(500).json({ 
            success: false,
            message: "Сугалаа худалдаж авахад алдаа гарлаа" 
        });
    }
}

// Сугалаануудыг авах (нээх шаардлагагүй)
export async function getUserTickets(req, res) {
    try {
        const { ticketIds } = req.body;
        
        if (!ticketIds || !Array.isArray(ticketIds)) {
            return res.status(200).json({
                success: true,
                tickets: []
            });
        }
        
        const tickets = await Ticket.find({ 
            ticketId: { $in: ticketIds } 
        }).sort({ purchaseTime: -1 }).limit(8);
        
        res.status(200).json({
            success: true,
            tickets
        });
        
    } catch (error) {
        console.error("Сугалаа авах алдаа:", error);
        res.status(500).json({ 
            success: false,
            message: "Сугалаа авахад алдаа гарлаа" 
        });
    }
}

// Нээх функц устгах (шаардлагагүй болсон)