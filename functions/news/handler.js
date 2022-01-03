var petition = require('../../share/libs/libExternalPetition');
var messages = require('../../share/libs/libProcessMesages');

module.exports.getNews= async (event, context) => {
  try {
    return await petition.get('https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=14f70045a6184c80ac2aa986d2f53a17');
  } catch (error) {
    return messages.error(error.message);
  }
}

module.exports.getOneBySource = async (event, context) => {
  try {
    const param = event.pathParameters;
    return await petition.get(`https://newsapi.org/v2/top-headlines?sources=${param.source}&apiKey=14f70045a6184c80ac2aa986d2f53a17`);
  } catch (error) {
    return messages.error(error.message);
  }
}

module.exports.getOneByMentions = async (event, context) => {
  try {
    if(!event.queryStringParameters.q) throw 'Not found parameter';
    const param = event.queryStringParameters.q;
    return await petition.get(`https://newsapi.org/v2/everything?q=${param}&sortBy=publishedAt&apiKey=14f70045a6184c80ac2aa986d2f53a17`);
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