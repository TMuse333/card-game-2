import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';


const app = express();

dotenv.config();



app.get("/", (req, res) => {
    res.send('wys playa');
});

mongoose.connect(process.env.MONGODB_URI )
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.listen(9000, () => {
    console.log('gun blazin');
});