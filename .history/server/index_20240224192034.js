// index.js

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes.js'

import cors from 'cors'



const app = express();



// app.use(cors(corsOptions));
dotenv.config();

// app.use(cors({
//     origin: 'https://quantumcardgame2.netlify.app',
//   }));

app.use(cors())

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

    app.use(express.json());

    app.use('/', routes); 
    


  

app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
