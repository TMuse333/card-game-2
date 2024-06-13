// routes.js

import express from 'express';
import Leaderboard from './models/leaderboard.model.js';

const router = express.Router();


router.post('/userData', async (req, res) => {
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

router.post('/userData', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token });
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