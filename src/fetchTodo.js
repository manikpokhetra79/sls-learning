"use strict";
const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const fetchTodo = async (event) => {
  let { id } = event.pathParameters;
  let todo;
  try {
    const result = await dynamoDB
      .get({
        TableName: "TodoTableSLS",
        Key: { id },
      })
      .promise();
    todo = result.Item;
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      message: "Some error",
    };
  }
  if (!todo) {
    return {
      statusCode: 404,
      message: "not found",
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};

module.exports = {
  handler: fetchTodo,
};
