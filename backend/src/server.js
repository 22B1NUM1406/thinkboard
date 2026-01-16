import express from 'express';
import ticketRoutes from './routes/ticketRoutes.js';
import { connectDB } from './config/db.js';
import cors from 'cors';
import path from 'path';

const PORT = 5001;
const app = express();
const __dirname = path.resolve();

// CORS
app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(express.json());

// API маршрутууд
app.use("/api/tickets", ticketRoutes);

// Test endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Сугалааны API сервер' });
});

// Production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

// Алдаа
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Алдаа гарлаа" });
});

// Холболт
try {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🎰 Сугалааны сервер ${PORT} порт дээр ажиллаж байна`);
    });
} catch (err) {
    console.error("❌ МонгоДБ холбогдоход алдаа:", err);
    process.exit(1);
}