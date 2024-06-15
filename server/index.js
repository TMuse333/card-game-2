// index.js

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes.js'

import cors from 'cors'



const app = express();
app.use(cors());
dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

    app.use(express.json());


    app.use('/', routes); 
    

    app.get('/status', (req, res) => {
        res.json({ dbConnected });
    });
  

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});