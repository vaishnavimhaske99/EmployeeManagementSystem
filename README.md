# EmployeeManagement

## Objective:

The goal of this project is to create a simple Angular application that manages employee data. The application allows users to **add**, **view**, **edit**, and **delete** employee information.

## Requirements:

### 1. **Employee Form**
The application includes a form to collect the following employee details:
- **Employee Name** (Text, Required)
- **Employee ID** (Number, Required)
- **Department** (Dropdown with predefined values such as HR, IT, Finance, Marketing, etc., Required)
- **Email** (Email, Required)
- **Joining Date** (Date, Required)

The form includes validation to ensure that:
- All required fields are filled.
- The email format is correct.

### 2. **Employee Table**
The application displays the list of employees in a table. Each row displays the following employee details:
- **Employee ID**
- **Employee Name**
- **Department**
- **Email**
- **Joining Date**

Additionally, each row includes:
- **Edit** button: Allows the user to edit the employee details.
- **Delete** button: Allows the user to remove the employee record.

### 3. **Edit Functionality**
When the **Edit** button is clicked, the selected employee's data is populated in the form. The user can then update the details and save the changes.

### 4. **Delete Functionality**
When the **Delete** button is clicked, the selected employee's record is removed from the table after a confirmation dialog (using `window.confirm` or a similar confirmation mechanism).

### 5. **Local Data Storage**
The employee data is stored in a local variable or `localStorage` to ensure the data persists even if the page is refreshed.

### 6. **Bonus (Optional)**
- **Search Bar**: Add a search bar to filter employees by name or department.
- **Highlight the Most Recently Added Employee**: Highlight the row of the most recently added employee.
- **Pagination**: Implement pagination for the table if the number of employees exceeds 5.

---

## Prerequisites

Before running the project, make sure you have the following installed:
- **Node.js** (LTS version) - [Download Node.js](https://nodejs.org/)
- **Angular CLI** - Install globally using the following command:
  ```bash
  npm install -g @angular/cli

## Start the Backend (JSON Server)
-The Angular application relies on a mock backend to simulate employee data. To start the backend, run the following command in a terminal:

json-server --watch db.json --port 3000

## Start the Frontend (Angular Application)
-ng serve
In a separate terminal window, run the following command to start the Angular development server:

bash Copy

ng serve

This will compile and serve the Angular application. The application will be accessible at:

bash Copy

http://localhost:4200/

The Angular application will automatically reload if you make changes to any source files.

