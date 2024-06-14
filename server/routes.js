// routes.js

import express from 'express';

import User from './models/user.model.js';
import bcrypt from 'bcrypt';

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
  const { username, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ username });
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


router.get('/userData/retrieve', async (req, res) => {
  try {
    const users = await User.find({}, 'username score'); // Fetch username and score
    res.json({ success: true, data: users });
   console.log('All the players so far',users)
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

router.post('/userData/updateScore', async (req, res) => {
  const { username, newScore } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username: username });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if the new score is higher than the current score
    if (newScore > user.score) {
      user.score = newScore; // Update the score
      await user.save(); // Save the updated user
      return res.json({ success: true, message: 'Score updated successfully' });
    } else {
      return res.json({ success: true, message: 'New score is not higher than the current score, no update made' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});






