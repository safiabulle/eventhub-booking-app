# EventHub Booking App

EventHub Booking App is a fully responsive event booking web application built using React, Firebase, and Tailwind CSS. The platform allows users to browse upcoming events, register and log into their accounts, book events, manage bookings through a personal dashboard, and securely store booking data using Firebase Firestore.

The application follows a modern React architecture with protected routes, authentication, Firestore database persistence, GitHub Actions CI workflow, and automated testing coverage.

---

# Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Authentication](#authentication)
- [Testing](#testing)
- [GitHub Actions CI](#github-actions-ci)
- [Semantic Versioning](#semantic-versioning)
- [Contributing](#contributing)
- [License](#license)
- [Conclusion](#conclusion)

---

# Project Description

EventHub Booking App was developed to simplify event discovery and booking processes through a modern web application. Users can create accounts, authenticate using email/password or Google Authentication, browse available events, search and filter events by category, and make bookings that persist in Firebase Firestore.

The project demonstrates the use of React routing, Firebase Authentication, Firestore persistence, protected routes, responsive UI design, GitHub Actions deployment workflow, and automated testing using Vitest.

---

# Features

- User Registration and Login
- Google Authentication
- Protected Dashboard Routes
- Responsive Mobile-Friendly Design
- Browse and View Event Details
- Book Events
- Cancel Bookings
- Firestore Database Persistence
- Search Events
- Filter Events by Category
- GitHub Actions Continuous Integration
- Automated Testing with Vitest
- Semantic Versioning Release

---

# Technologies Used

## Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Vite

## Backend & Database
- Firebase Authentication
- Firebase Firestore

## Testing
- Vitest
- React Testing Library
- Jest DOM

## DevOps
- GitHub Actions

---

# Installation

## 1. Clone the Repository

```bash
git clone git@github.com:safiabulle/eventhub-booking-app.git
```

---

## 2. Navigate into the Project Folder

```bash
cd eventhub-booking-app
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Run the Development Server

```bash
npm run dev
```

---

## 5. Open in Browser

Visit:

```bash
http://localhost:5173

```

---

# Usage

The application allows users to:

1. Browse available events
2. View event details
3. Register or login
4. Authenticate using Google or Email/Password
5. Book events
6. View bookings in dashboard
7. Cancel bookings
8. Search and filter events

---


# Authentication

The application uses Firebase Authentication for secure user authentication.

Supported authentication methods:
- Email and Password Authentication
- Google Authentication

Protected routes ensure only authenticated users can access:
- Dashboard
- Booking functionalities

---

# Testing

The project uses Vitest and React Testing Library for automated testing.

## Run Tests

```bash
npm test
```

## Run Coverage Report

```bash
npm test -- --coverage
```

Current coverage exceeds the required 30% test coverage objective.

---

# GitHub Actions CI

The project includes a GitHub Actions Continuous Integration workflow.

Workflow Features:
- Automatically installs dependencies
- Runs automated tests
- Builds the React application

Workflow File Location:

```bash
.github/workflows/main.yml
```

---

# Semantic Versioning

The project follows semantic versioning principles.

Current Release:

```bash
v1.0.0
```

Semantic versioning format:

```bash
MAJOR.MINOR.PATCH
```

---

# Contributing

Contributions are welcome.

## Steps to Contribute

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Create a Pull Request

---

# License

This project is not licensed

---


# Conclusion

EventHub Booking App demonstrates modern frontend web development concepts using React and Firebase. The project focuses on authentication, routing, responsive UI design, Firestore database persistence, automated testing, GitHub Actions CI workflow, and semantic versioning.

The application provides a complete event booking experience while following professional software engineering practices and project structure standards.