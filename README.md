# Personal Task Manager API

## Description

The **Personal Task Manager API** is a Node.js application that allows users to manage tasks through a RESTful API. It includes user authentication (JWT-based), user registration, login, and task management with CRUD operations. The API allows users to create, update, retrieve, and delete tasks. Tasks can be organized by title, description, priority, due date, and status.

## Features

-   **User Registration**: Users can register with a username, email, and password.

-   **User Login**: Users can log in with their email and password to receive a JWT token.

-   **Task Management**:

-   Create tasks with details like title, description, priority, due date, and status.

-   Read all tasks or get a specific task by ID.

-   Update tasks (title, description, priority, due date, status, etc.).

-   Delete tasks.

## Technologies Used

-   **Node.js**: JavaScript runtime for building the server.

-   **Express**: Web framework for building REST APIs.

-   **Sequelize**: ORM for interacting with the database.

-   **MySQL** (or PostgreSQL): Relational database management system.

-   **JWT (JSON Web Tokens)**: For user authentication.

-   **bcryptjs**: For password hashing.

-   **dotenv**: To manage environment variables.

## Requirements

-   **Node.js** (v14.x or higher)

-   **MySQL** (or PostgreSQL)

-   **npm** (v6.x or higher)

## Installation

1.  Clone the repository:

```bash

git clone https://github.com/yourusername/personal-task-manager-api.git

cd personal-task-manager-api


2.  Install dependencies:

npm install


3.  Set up the environment variables: Create a .env file in the root directory and add the following variables:

DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=task_manager
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
JWT_SECRET=your_jwt_secret
NODE_ENV=development


4.  Set up the database: Make sure MySQL is running and create the database:

CREATE DATABASE task_manager;


5.  Run migrations (if using Sequelize):

npx sequelize-cli db:migrate


Usage:-

1.  Start the server:

npm start


2.  API Endpoints:

User Registration: POST /api/auth/register
User Login: POST /api/auth/login
Create Task: POST /api/tasks
Get All Tasks: GET /api/tasks
Get Task by ID: GET /api/tasks/:id
Update Task: PUT /api/tasks/:id
Delete Task: DELETE /api/tasks/:id


Testing:-

You can use tools like Postman or cURL to test the API endpoints.

Contributing:-

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
```
