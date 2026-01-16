import mongoose from 'mongoose';

export const connectDB= async ()=>{
    try {
        await mongoose.connect("mongodb+srv://manal05116_db_user:l6bmIMus0MczKVdp@cluster0.brrtpcb.mongodb.net/notes_db?appName=Cluster0");
        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.error("Error connecting to MONGODB ", error);
        process.exit(1);
    }
}
