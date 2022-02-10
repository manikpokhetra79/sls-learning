"use strict";
const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const fetchTodos = async (event) => {
  try {
    const results = await dynamoDB
      .scan({
        TableName: "TodoTableSLS",
      })
      .promise();
    const todos = results.Items;
    console.log(todos);
    return {
      statusCode: 200,
      body: JSON.stringify(todos),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 400,
      body: JSON.stringify(todos),
    };
  }
};

module.exports = {
  handler: fetchTodos,
};
