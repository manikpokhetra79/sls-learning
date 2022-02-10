"use strict";
const AWS = require("aws-sdk");
const { v4 } = require("uuid");
const dynamodb = new AWS.DynamoDB.DocumentClient();
const addTodo = async (event) => {
  const { todo } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  const newTodo = {
    id,
    todo,
    createdAt,
    completed: false,
  };

  return await dynamodb
    .put({
      TableName: "TodoTableSLS",
      Item: newTodo,
    })
    .promise()
    .then(() => {
      return {
        statusCode: 200,
        body: JSON.stringify(newTodo),
      };
    })
    .catch((error) => {
      console.error("Error while creating todo", error);
      return;
    });
};

module.exports = {
  handler: addTodo,
};
