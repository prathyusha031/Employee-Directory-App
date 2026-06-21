# Employee Directory Application

## Overview

Employee Directory Application is a responsive React-based web application that allows users to browse, search, filter, sort, and view employee information fetched from the DummyJSON API.

The application is built using React functional components, JavaScript, Tailwind CSS, and React Hooks while following clean architecture and component-based design principles.

---

## Live Demo

**Vercel Deployment:**
https://employee-directory-app-rho.vercel.app/

---

## Features

### Mandatory Features

* Fetch employee data from DummyJSON API
* Display employees in responsive card layout
* Live employee search by name
* Filter employees by department
* Filter employees by company
* View detailed employee information in a modal
* Fully responsive design for desktop and mobile devices
* Loading state using skeleton loaders
* Error handling for failed API requests

### Bonus Features

* Pagination
* Debounced Search
* Employee Sorting (Name, Age, Department)
* Skeleton Loading UI
* Dark Mode Toggle
* Smooth Hover Animations
* Modal Animations
* Responsive User Interface

---

## Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* Tailwind CSS

### State Management

* React Hooks

  * useState
  * useEffect
  * Custom Hook (useDebounce)

### API

* DummyJSON Users API

  * https://dummyjson.com/users

### Deployment

* Vercel

---

## Project Structure

```text
src/
├── components/
│   ├── EmployeeCard.jsx
│   ├── EmployeeModal.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   └── SkeletonCard.jsx
│
├── hooks/
│   └── useDebounce.js
│
├── pages/
│   └── Home.jsx
│
├── services/
│   └── employeeService.js
│
├── styles/
│   └── animations.css
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/prathyusha031/Employee-Directory-App.git
```

Navigate to project directory:

```bash
cd Employee-Directory-App
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

---

## Implemented Functionality

### Employee Management

* Employee Listing
* Employee Detail Modal
* Department Filtering
* Company Filtering
* Employee Search

### User Experience

* Responsive Layout
* Skeleton Loading
* Empty State Handling
* Error State Handling
* Dark Mode Support

### Performance Optimization

* Debounced Search
* Pagination
* Efficient Filtering
* Client-side Sorting

---

## Design Highlights

* Modern Card-Based UI
* Responsive Grid Layout
* Dark Mode Support
* Smooth Hover Effects
* Clean Visual Hierarchy
* Accessible User Interface

---

## Future Improvements

* Theme Persistence using Local Storage
* Export Employee Data
* Advanced Multi-Filter Support
* Employee Favorites
* Employee Statistics Dashboard

---

## Author

**Bailapudi Prathyusha**

GitHub: https://github.com/prathyusha031
