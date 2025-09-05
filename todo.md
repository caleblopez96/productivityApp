# TODO

## 09/05

### Frontend

-   [x] Set up React proj with Vite
-   [] install and configre tailwind

### Backend

-   [x] Create .NET web api proj
-   [] Install Scalar for testing (optional?)
-   [x] Create Bill Model -> BillDto.cs
-   [x] Create Bill Conroller -> BillController.cs
-   [x] Create Bill service -> GetBillsFromDB() gets bills in db with dapper

### Database

-   [x] Create a database -> ProductivityAppDB
-   [x] Create Bills Table in proj db
-   [x] Connect database to project (connection string)

### Testing

[x] API call to https://localhost:7152/api/bills functions properly

## 09/06

### Frontend Setup

-   [] Install Tailwind CSS
-   [] Configure tailwind.config.js
-   [] Import Tailwind in index.css

### Create Bills Components

-   [] Create src/components/Bills/BillsList.jsx
-   [] Create src/components/Bills/BillForm.jsx
-   [] Ensure components render correctly in App.jsx

### Connect Frontend → Backend

-   [] Test GET request to /api/bills
-   [] Display bills in BillsList component
-   [] Handle API errors and loading state

### Add CRUD Functionality

-   [] Implement POST to add a new bill

-   [] Implement PUT to update an existing bill

-   [] Implement DELETE to remove a bill

-   [] Test all CRUD operations from the frontend

### Backend Preparation

-   [] Ensure BillsController has GET, POST, PUT, DELETE endpoints

-   [] Confirm BillService supports all CRUD operations via Dapper

-   [] Test endpoints independently in Postman

### Optional Enhancements

-   [] Add form validation in BillForm.jsx

-   [] Display success/error messages

-   [] Add basic styling with Tailwind

-   [] Ensure responsive layout
