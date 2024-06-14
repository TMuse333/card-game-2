// middleware/authenticateToken.js

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  // Get the token from the authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    return res.status(401).json({ success: false, message: 'Unauthorized: Missing token' });
  }

  // Verify the token
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ success: false, message: 'Forbidden: Invalid token' });
    }

    // Store user information in request object for further use
    req.user = user;
    next(); // Pass control to the next middleware
  });
};

export default authenticateToken;
