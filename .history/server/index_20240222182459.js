// index.js

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Leaderboard from './models/leaderboard.model.js';

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Example route to add a new user and score
app.post('/addScore', async (req, res) => {
  try {
    const { username, score } = req.body;

    // Create a new leaderboard entry
    const newScore = new Leaderboard({ username, score });

    // Save the new entry to MongoDB
    await newScore.save();

    res.status(201).json({ message: 'Score added successfully' });
  } catch (error) {
    console.error('Error adding score:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
