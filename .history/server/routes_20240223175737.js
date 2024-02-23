// routes.js

import express from 'express';
import Leaderboard from './models/leaderboard.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { username,score } = req.body;

  try {
    // Assuming the 'score' is not provided in the request body
    // You may need to adjust this based on your requirements
    const newEntry = new Leaderboard({ username, score});
    
    await newEntry.save();
    
    res.json({ success: true, message: 'Username submitted successfully ' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
