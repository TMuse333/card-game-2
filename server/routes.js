// routes.js

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/user.model.js';
import dotenv from 'dotenv';
import authenticateToken from './middleware/authenticateToken.js';
import cors from 'cors'
import { sendEmail } from './emailsender.js';


const router = express.Router();

router.use(cors())

// Load environment variables from .env file into process.env
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET; // Access JWT_SECRET from environment variables

// Route to register a new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    let existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists.' });
    }

    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id, username: newUser.username }, JWT_SECRET, { expiresIn: '1h' });

    // Send confirmation email
    const subject = 'Welcome to Quantum Card Game!';
    const htmlContent = `<p>Dear ${username},</p><p>Thank you for registering with Quantum Card Game.</p>`;
    const emailSent = await sendEmail(email, subject, htmlContent);

    if (emailSent) {
      res.status(200).json({ message: 'User registered successfully. Confirmation email sent.', token });
    } else {
      res.status(500).json({ error: 'Failed to send confirmation email.' });
    }
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'An error occurred during registration.' });
  }
});


router.get('/userData/protectedRoute', authenticateToken, (req, res) => {
  // Middleware ensures user is authenticated
  // Access user info from req.user
  res.json({ message: 'Protected route accessed successfully', user: req.user });
});

// Route to authenticate/login a user
router.post('/userData/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    // Respond with success and token
    res.json({ success: true, message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route to retrieve all users and their scores
router.get('/userData/retrieve', async (req, res) => {
  try {
    const users = await User.find({}, 'username score'); // Fetch username and score
    res.json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Route to update user's score if it's higher than the current score
router.post('/userData/updateScore', authenticateToken, async (req, res) => {
  const { username, newScore } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

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

export default router;
