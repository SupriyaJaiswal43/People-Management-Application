People Management Application
Introduction
This People Management Application allows users to manage a list of people using a Single Page Application (SPA) built with Angular for the frontend and Node.js with MongoDB for the backend.

Technologies Used
Frontend: Angular 7/8, TypeScript, HTML/CSS, Bootstrap (optional)
Backend: Node.js, Express.js, MongoDB, Mongoose, Body-Parser
Getting Started
Prerequisites
Node.js (v12 or later)
Angular CLI (v7 or later)
MongoDB (running locally or accessible)
Setup
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/people-management-app.git
cd people-management-app
Set Up the Angular Frontend:

Navigate to the Angular project directory:
bash
Copy code
cd angular-people-management
Install dependencies:
bash
Copy code
npm install
Start the Angular development server:
bash
Copy code
ng serve
Visit the application at http://localhost:4200.
Set Up the Node.js Backend:

Open a new terminal and navigate to the backend project directory:
bash
Copy code
cd node-people-api
Install dependencies:
bash
Copy code
npm install
Start the Node.js server:
bash
Copy code
node app.js
The API will be running at http://localhost:5000/api.
Running the Application
Start the Backend:

Ensure your MongoDB server is running.
Start the Node.js backend using the command from the previous section. This will set up the RESTful API.
Start the Frontend:

In a separate terminal, start the Angular frontend. This will allow you to interact with the API and manage the list of people.
Open Your Browser:

Navigate to http://localhost:4200 to access the People Management Application.
API Endpoints
GET /api/person - Fetch all people.
POST /api/person - Create a new person.
PUT /api/person/:id - Update a person by ID.
DELETE /api/person/:id - Delete a person by ID.
Contributing
Feel free to fork the repository and submit a pull request. Follow coding standards and add relevant tests.

License
This project is licensed under the MIT License.
