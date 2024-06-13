import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';  // Import user routes
import leaderboardRoutes from './routes/leaderboard.routes.js';  // Import leaderboard routes

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(cors());
app.use(express.json());

// Use the routes
app.use('/users', userRoutes);
app.use('/leaderboard', leaderboardRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
