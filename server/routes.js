// routes.js

import express from 'express';
import Leaderboard from './models/leaderboard.model.js';
import User from './models/user.model.js';

const router = express.Router();


router.post('/userData/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username or email already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.json({ success: true, message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route to authenticate/login a user
// Assuming you have already set up your User model and bcrypt for password hashing

router.post('/userData/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // If credentials are correct, respond with success and user information
    res.json({ success: true, message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


router.post('/leaderboard', async (req, res) => {
  const { username,score } = req.body;

  try {
    // Assuming the 'score' is not provided in the request body
    // You may need to adjust this based on your requirements
    const newEntry = new Leaderboard({ username, score});
    
    await newEntry.save();
    
    res.json({ success: true, message: 'Username and score submitted successfully ' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.get('/leaderboard', async (req, res) => {
    try {
      const leaderboardData = await Leaderboard.find().sort({ score: -1 }).limit(20);
      console.log('Leaderboard Data:', leaderboardData);
      res.json({ success: true, data: leaderboardData });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });

export default router;