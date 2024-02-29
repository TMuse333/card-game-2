// note - this function MUST be named `identity-signup` to work
// we do not yet offer local emulation of this functionality in Netlify Dev
//
// more:
// https://www.netlify.com/blog/2019/02/21/the-role-of-roles-and-how-to-set-them-in-netlify-identity/
// https://docs.netlify.com/functions/functions-and-identity/

const { MongoClient } = require('mongodb');

const handler = async function (event) {
  try {
    // Extract user data from the event
    const { user } = JSON.parse(event.body);

    // MongoDB connection string
    const mongoUri = process.env.MONGODB_URI;

    // Connect to MongoDB
    const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

    // Access your MongoDB collection and perform operations
    const db = client.db('test');
    const collection = db.collection('leaderboard');

    // Query MongoDB to retrieve data based on user information
    const mongoData = await collection.findOne(
      { username: user.username }, // Your existing query condition
     {score: user.score}
    );

    // Close the MongoDB connection
    await client.close();

    // Process the retrieved data
    const responseBody = {
      user_metadata: {
        // append current user metadata
        ...user.user_metadata,
        custom_data_from_function: 'hurray this is some extra metadata',
        mongo_data: mongoData,
      },
    };

    // Check for the trust-this-company.com domain in the email
    if (user.email.split('@')[1] === 'trust-this-company.com') {
      responseBody.app_metadata = {
        roles: ['editor'],
        my_user_info: 'this is some user info',
      };
    } else {
      responseBody.app_metadata = {
        roles: ['visitor'],
        my_user_info: 'this is some user info',
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(responseBody),
    };
  } catch (error) {
    console.error('Error handling identity signup:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

module.exports = { handler };

