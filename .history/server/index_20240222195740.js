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
// Submitting username
app.post('/submit-username', async (req, res) => {
    try {
      const { username } = req.body;
  
      // Check if the username already exists
      const existingUser = await Leaderboard.findOne({ username });
  
      if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
      }
  
      // Create a new leaderboard entry for the user
      const newUser = new Leaderboard({ username, score: 0 });
  
      // Save the new user to MongoDB
      await newUser.save();
  
      res.status(201).json({ message: 'Username submitted successfully' });
    } catch (error) {
      console.error('Error submitting username:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  // Updating score
  app.post('/update-score', async (req, res) => {
    try {
      const { username, score } = req.body;
  
      // Find the user by username
      const user = await Leaderboard.findOne({ username });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update the user's score
      user.score += score;
  
      // Save the updated user to MongoDB
      await user.save();
  
      res.status(200).json({ message: 'Score added successfully' });
    } catch (error) {
      console.error('Error updating score:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
