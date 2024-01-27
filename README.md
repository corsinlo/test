#  Certilogo Project
This project includes both a React frontend (certilogo-frontend) and a Strapi backend (certilogo-backend). Follow these instructions to set up and run both parts of the project locally.

## Prerequisites
Node.js (version 12 or higher)
npm (usually comes with Node.js)

## Setup
First, clone the repository to your local machine:

### `git clone https://github.com/corsinlo/test.git`
### `cd test`

## Backend Setup (certilogo-backend)
Navigate to the backend directory:
### `cd certilogo-backend`
### `npm install`

(for a differente port Create a .env file in the root of the certilogo-backend directory. You can use .env.example as a template.
 Default port is 1337.)

```
.env
HOST=0.0.0.0
 PORT=1337
```

Start the Strapi server:

### `npm run develop`
The Strapi admin panel will be available at http://localhost:1337/admin.
Access http://localhost:1337/admin and insert the test user credentials:

```
Email: test@mail.com
Password: Test2024
```
### Frontend Setup (certilogo-frontend)
On a separated Terminal, Navigate to the frontend directory (from the project root):

### `cd ../certilogo-frontend`
Install the necessary dependencies:

### `npm install`

Set up your environment variables:

Create a .env file in the root of the certilogo-frontend directory. You can use .env.example as a template.
set it up in the following way 1337.

```
REACT_APP_STRAPI_URL=http://localhost:1337
```
Start the React application:

### `npm run start`
The application will be available at http://localhost:3000.

Usage
After starting both the backend and frontend, navigate to http://localhost:3000 in your browser to use the application,
**Added some quick render testing