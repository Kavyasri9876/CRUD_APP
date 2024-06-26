# CRUD_APP
A webiste for crud operations which will directly effect on mongoDB . 

This is a CRUD (Create, Read, Update, Delete) application built using React for the frontend and MongoDB for the backend. The app allows you to manage employee data by connecting to a MongoDB database and performing CRUD operations.

## Features

- View all employees
- Add a new employee
- Update an existing employee
- Delete an employee
- API calls tested with Postman

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- MongoDB installed and running

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Kavyasri9876/CRUD_APP.git
    ```
2. Navigate to the project directory:
    ```bash
    cd CRUD_APP
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

4. Set up your MongoDB connection string in a `.env` file:
    ```env
    MONGODB_URI=mongodb://localhost:27017/srmap
    PORT=9000
    ```

5. Start the backend server:
    ```bash
    node server.js
    ```

6. Start the frontend development server:
    ```bash
    npm start
    ```

## Project Structure

```plaintext
CRUD_APP/
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── CreateEmployee.js
│   │   │   ├── Employee.js
│   │   │   ├── UpdateEmployee.js
│   │   ├── App.js
│   │   └── index.js
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
├── server/
│   ├── models/
│   │   └── employee.js
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
├── readme.txt
├── .gitignore
├── README.md


## Backend

### Endpoints

- `POST /createEmployee`: Creates a new employee.
- `GET /`: Retrieves all employees.
- `GET /getEmployee/:id`: Retrieves a specific employee by ID.
- `PUT /updateEmployee/:id`: Updates a specific employee by ID.
- `DELETE /deleteEmployee/:id`: Deletes a specific employee by ID.

### Models

- Employee: Represents an employee with the following fields:
  - idNum: String
  - name: String
  - gender: String
  - salary: Number

### Dependencies

- express
- mongoose
- cors

## Frontend

### Routes

- `/`: Displays the list of all employees.
- `/update/:id`: Displays a form to update a specific employee.
- `/create`: Displays a form to create a new employee.

### Components

- Employee: Displays the list of employees with options to edit or delete each employee.
- CreateEmployee: Displays a form to add a new employee.
- UpdateEmployee: Displays a form to update an existing employee.

### Dependencies

- React
- React Router
- axios
- bootstrap

## Testing API Calls

To ensure the API calls are correct, you can use Postman to test each endpoint.

## Receiving ID from URL

To receive the ID passed in the URL in your React components, use the `useParams` hook from `react-router-dom`.

## Notes

- Ensure MongoDB is running before starting the backend server.
- Adjust the MongoDB connection string as needed for your setup.
