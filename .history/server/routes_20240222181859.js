// routes.js
import express from 'express';
import Leaderboard from '../models/leaderboard.model';

const router = express.Router();

router.post('/register', async (req, res) => {
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

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/addScore', async (req, res) => {
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
    console.error('Error adding score:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
