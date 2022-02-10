# Crud Api's using Serverless Framework

## Description:

- This is a simple Todo crud api app developed using Serverless framework.
- This app has four endpoints to create, fetch and update todos.
- Use serverless cli commands to deploy and handle the project.

## Api endpoints

| Method | Path              | Usage                              |
| ------ | ----------------- | ---------------------------------- |
| POST   | /addtodo          | Add new todo                       |
| GET    | /fetchtodos       | Get all todos                      |
| GET    | /fetchtodo/{id}   | Get single todo using id           |
| PATCH  | /updatetodos/{id} | Update todo complete status via id |

## Usage

- Add new Todo by providing {todo : "value"} in body.
- Provide id in path parameters to update and fetch single todo.

## How to Start / Install Project

- Clone this project
- Navigate to Project Directory
- Run following commands : -- npm install 
- This command will install all required dependencies for the project.

## Technology used:

- NodeJS.
- Serverless framework.
- AWS Services used : DynamoDB, IAM , Lambda, Cloudformation
