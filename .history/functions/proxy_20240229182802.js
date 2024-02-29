// functions/mongoProxy.js

export const handler = async function (event, context) {
    const axios = require('axios');
  
    try {
      const response = await axios({
        method: event.httpMethod,
        url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-swhks/endpoint/data/v1/test/leaderboard', // Update with your MongoDB API endpoint
        data: event.body,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://quantumcardgame2.netlify.app',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
  
      return {
        statusCode: response.status,
        body: JSON.stringify(response.data),
        headers: {
          'Access-Control-Allow-Origin': 'https://quantumcardgame2.netlify.app',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      };
    } catch (error) {
      return {
        statusCode: error.response ? error.response.status : 500,
        body: JSON.stringify(error.message),
        headers: {
          'Access-Control-Allow-Origin': 'https://quantumcardgame2.netlify.app',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      };
    }
  };
  