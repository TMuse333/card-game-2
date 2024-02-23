// index.js

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Leaderboard from './models/leaderboard.model.js';
import routes from './routes.js';

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

    app.use('/', routes);

// Example route to add a new user and score
// Submitting username

  

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
