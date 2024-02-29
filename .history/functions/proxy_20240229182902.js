// functions/mongoProxy.js
const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    const response = await axios({
      method: event.httpMethod,
      url: 'https://cloud.mongodb.com/v2/65d7918c6f772c6e0289c314#/metrics/replicaSet/65d7921a22b7166f0ec3bf17/explorer/test/leaderboards/find', // Update with your MongoDB API endpoint
      data: event.body,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
      headers: {
        'Access-Control-Allow-Origin': 'https://your-netlify-app.netlify.app', // Update with your Netlify app URL
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify(error.message),
    };
  }
};
