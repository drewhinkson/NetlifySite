const axios = require('axios');

exports.handler = async function(event, context) {
  try {
    const response = await axios.get('http://numbersapi.com/random/trivia');
    return {
      statusCode: 200,
      body: JSON.stringify({ numberFact: response.data }), 
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch number fact' }),
    };
  }
};
