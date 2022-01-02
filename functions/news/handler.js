var petition = require('../../share/libs/libExternalPetition');
var messages = require('../../share/libs/libProcessMesages');

module.exports.hello= async (event, context) => {
  try {
    return await petition.get('https://newsapi.org/v2/everything?q=tesla&from=2021-12-02&sortBy=publishedAt&apiKey=14f70045a6184c80ac2aa986d2f53a17');
  } catch (error) {
    return messages.error(error.message);
  }
}

/**
 * return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v2.0! Your function executed successfully!",
        input: context,
      },
      null,
      2
    ),
  };
 */