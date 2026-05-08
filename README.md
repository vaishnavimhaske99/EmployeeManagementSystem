# Employee Management System

![Employee Management System Banner](images/ems-banner.png)

## 📌 Project Overview

The **Employee Management System** is a web-based application designed to manage employee records efficiently.  
It helps organizations streamline employee-related operations such as adding, updating, deleting, and viewing employee details.

---

## 🚀 Features

- ➕ Add New Employees
- 📝 Update Employee Information
- ❌ Delete Employee Records
- 🔍 Search Employees
- 📋 View Employee List
- 💾 Database Connectivity
- 🎨 Responsive User Interface

---

## 🛠️ Technologies Used

- Java
- Spring Boot
- HTML5
- CSS3
- JavaScript
- Bootstrap
- MySQL

---

## 📂 Project Structure

```bash
EmployeeManagementSystem/
│── src/
│── templates/
│── static/
│── images/
│── pom.xml
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/vaishnavimhaske99/EmployeeManagementSystem.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd EmployeeManagementSystem
```

### 3️⃣ Configure Database

Update your database credentials in:

```properties
application.properties
```

Example configuration:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=yourpassword
```

### 4️⃣ Run the Application

```bash
mvn spring-boot:run
```

---

## 📸 Screenshots

### Dashboard

![Dashboard](images/dashboard.png)

### Employee List

![Employee List](images/employee-list.png)

---

## 🎯 Future Enhancements

- Employee Attendance System
- Payroll Management
- Login Authentication
- REST API Integration
- Cloud Deployment

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Vaishnavi Mhaske**

GitHub:  
https://github.com/vaishnavimhaske99

---

## 📷 Adding PNG Images

Create an `images` folder in the root directory and add your PNG files.

Example:

```bash
images/
├── ems-banner.png
├── dashboard.png
└── employee-list.png
```

Image usage in README:

```md
![Dashboard](images/dashboard.png)
```
