import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const dbURL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.ewtw3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const app = express();
app.listen(PORT, (err: any) => {
    if(err) {
        throw new Error(err)
    }
    console.log(`Server is starting at http://localhost:${PORT}`);
});