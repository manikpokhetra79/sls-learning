"use strict";
const AWS = require("aws-sdk");
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const updateTodo = async (event) => {
  let { id } = event.pathParameters;
  let todo;
  try {
    const result = await dynamoDB
      .update({
        TableName: "TodoTableSLS",
        Key: { id },
        UpdateExpression: "SET completed = :completed",
        ExpressionAttributeValues: {
          ":completed": "completed",
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();
    todo = result?.Item;
    console.log(todo);
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      message: "Some error",
    };
  }
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: "todo status updated",
    }),
  };
};

module.exports = {
  handler: updateTodo,
};
