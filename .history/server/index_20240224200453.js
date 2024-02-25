// index.js

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import routes from './routes.js';
import axios from 'axios';

import cors from 'cors';

const app = express();

dotenv.config();

app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());

app.use('/', routes);

// New route for fetching data using MongoDB Data API
app.post('/fetchData', async (req, res) => {
  try {
    const data = {
      collection: '<COLLECTION_NAME>',
      database: '<DATABASE_NAME>',
      dataSource: 'Cluster0',
      projection: {
        _id: 1,
      },
    };

    const config = {
      method: 'post',
      url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-swhks/endpoint/data/v1/action/findOne',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'api-key': process.env.cardGameKey,
      },
      data: JSON.stringify(data),
    };

    const response = await axios(config);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(9000, () => {
  console.log('Server is running on port 9000');
});
