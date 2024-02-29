// index.js

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes.js';
import cors from 'cors';

const app = express();
dotenv.config();

const allowedOrigins = ['https://quantumcardgame2.netlify.app'];

app.use(cors()
//   cors({
//     origin: function (origin, callback) {
//       if (!origin || allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//   })
);

mongoose
  .connect(process.env.MONGODB_URI, )
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());

app.use('/', routes);

// Only listen on localhost when not running as a Netlify Function
if (process.env.NETLIFY !== 'true') {
  app.listen(9000, () => {
    console.log('Server is running on port 9000');
  });
}

export { app };
