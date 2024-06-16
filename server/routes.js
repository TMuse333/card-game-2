// routes.js

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/user.model.js';
import dotenv from 'dotenv';
import authenticateToken from './middleware/authenticateToken.js';
import cors from 'cors'
import { getVerificationEmailHtml } from './verificationEmail.js';
import transporter from './emailsender.js';

const router = express.Router();

router.use(cors())

// Load environment variables from .env file into process.env
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET; // Access JWT_SECRET from environment variables

// Route to register a new user
router.post('/userData/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Username or email already exists' });
    }

    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    //server/verificationEmail.html

    // Generate JWT token for verification link
    const token = jwt.sign({ id: newUser._id, username: newUser.username }, JWT_SECRET, { expiresIn: '1h' });

    // Prepare verification email
    const verificationLink = `https://quantum-card-game-bd4eaa931b03.herokuapp.com/verify/${token}`; // Replace with your actual verification link

    const html = getVerificationEmailHtml(newUser.username, verificationLink);

    // Send verification email
   const mail = await transporter.sendMail({
      from: 'q3visualdesigns@gmail.com', // Sender email address
      to: newUser.email, // Recipient email address
      subject: 'Verify Your Email Address',
      html: html,
    });

    console.log('email?',mail.messageId)

    // Respond with success message including token
    res.json({ success: true, message: 'User registered successfully', user: newUser, token:token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, error: error.message });
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
router.post('/userData/updateScore', async (req, res) => {
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

router.get('/status', (req, res) => {
  res.status(200).json({ dbConnected });
});

export default router;