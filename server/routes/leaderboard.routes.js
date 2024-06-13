import express from 'express';
import Leaderboard from '../models/leaderboard.model.js';

const router = express.Router();

// Submit a score
router.post('/leaderboard', async (req, res) => {
  const { username, score } = req.body;

  try {
    const newEntry = new Leaderboard({ username, score });
    await newEntry.save();

    res.json({ success: true, message: 'Score submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get the top scores
router.get('/leaderboard', async (req, res) => {
  try {
    const leaderboardData = await Leaderboard.find().sort({ score: -1 }).limit(20);
    res.json({ success: true, data: leaderboardData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
