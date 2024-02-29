// functions/mongoProxy.js
const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    const response = await axios({
      method: event.httpMethod,
      url: 'https://your-mongodb-api-url/data/v1/leaderboard', // Update with your MongoDB API endpoint
      data: event.body,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify(error.message),
    };
  }
};
