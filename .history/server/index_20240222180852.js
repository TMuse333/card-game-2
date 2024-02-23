// index.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import leaderboardRoutes from 'server/routes.js';

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Use the leaderboard routes
app.use('/leaderboard', leaderboardRoutes);

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
