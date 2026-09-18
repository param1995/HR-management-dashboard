# Hr Admin Dashboard - Angular Application

The Employee Management System is a robust Angular application designed to streamline and simplify the management of employee data. This project incorporates Angular Material UI for a modern and professional user experience while providing core HR administration features such as employee records, filtering, sorting, and pagination.

## Overview

This dashboard is built for HR teams and administrators who need to manage employee details efficiently. It offers a responsive, data-driven interface to create, read, update, and delete employee records while improving visibility into team structure and workforce information.

## Features

- CRUD operations for employee records
- Search and filtering by employee name, designation, or department
- Sorting by key fields such as name, designation, or department
- Pagination to handle large datasets efficiently
- Modern Angular Material-based dashboard UI
- Local JSON-based mock backend for demo and testing
- Chart-ready analytics support for reporting and overview views

## Tech Stack

- Angular
- TypeScript
- HTML
- SCSS
- Angular Material
- Bootstrap
- Chart.js
- JSON Server

## Language Composition

- TypeScript: 45%
- HTML: 32.8%
- SCSS: 22.2%

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI

### Clone the repository

```bash
git clone https://github.com/param1995/HR-management-dashboard.git
cd HR-management-dashboard
```

### Install dependencies

```bash
npm install
```

### Run the app

```bash
ng serve
```

Open the application in your browser at:

```text
http://localhost:4200
```

### Run the mock API

This project includes a local `db.json` file for demo data. If needed, start the mock backend with:

```bash
npx json-server --watch db.json
```

## Project Structure

```text
HR-management-dashboard/
├── src/
├── db.json
├── angular.json
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.spec.json
└── README.md
```

## Contributing

Contributions are welcome. If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request.
