"use strict";
const formatMessage = (message, status) => {
    return {
        statusCode: status,
        body: JSON.stringify({ message })
    }
}

module.exports = {
    message: (message) => {
        return formatMessage(message, 200);
    },
    error: (message) => {
        return formatMessage(message, 400);
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