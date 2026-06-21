# Employee Directory Management System

A modern and responsive Employee Directory Management System built using React and JavaScript. The application allows users to manage employee records through an intuitive interface with search, filtering, sorting, pagination, dark mode, and CRUD functionality.

## Live Demo

🔗 https://employee-directory-app-rho.vercel.app

## GitHub Repository

🔗 https://github.com/prathyusha031/Employee-Directory-App

---

## Features

### Employee Management
- View employee records
- Add new employees
- Edit employee information
- View detailed employee profiles

### Search & Filtering
- Real-time employee search
- Filter employees by department
- Filter employees by company
- Combined search and filter functionality

### Sorting & Navigation
- Sort employees by:
  - Name
  - Age
  - Department
- Pagination for efficient data browsing

### User Experience
- Responsive design for desktop, tablet, and mobile devices
- Dark Mode / Light Mode support
- Modern and clean user interface
- Loading and error state handling
- Reusable React components

---

## Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- Tailwind CSS

### State Management
- React Hooks
  - useState
  - useEffect
  - useMemo

### Deployment
- Vercel

### Data Source
- DummyJSON API
  - https://dummyjson.com/users

---

## Project Structure

```text
src/
├── components/
│   ├── EmployeeCard.jsx
│   ├── EmployeeModal.jsx
│   ├── AddEmployeeModal.jsx
│   ├── EditEmployeeModal.jsx
│   ├── Navbar.jsx
│   └── Pagination.jsx
│
├── hooks/
│   └── useEmployees.js
│
├── pages/
│   └── Home.jsx
│
├── services/
│   └── employeeService.js
│
├── App.js
└── main.jsx
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/prathyusha031/Employee-Directory-App.git
```

### Navigate to Project

```bash
cd Employee-Directory-App
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Application will run at:

```text
http://localhost:5173
```

---

## Key Highlights

- Built using React Functional Components
- Modular and reusable component architecture
- Responsive UI design using Tailwind CSS
- CRUD operations for employee management
- Dark/Light theme implementation
- Clean folder structure and maintainable codebase
- Deployed and production-ready application

---

## Future Enhancements

- Employee deletion functionality
- Role-based authentication
- Employee analytics dashboard
- Export employee data to CSV/PDF
- Backend integration with database support
- Advanced filtering options

---

## Author

**Bailapudi Prathyusha**

- GitHub: https://github.com/prathyusha031

---

## License

This project is developed for learning, portfolio, and demonstration purposes.