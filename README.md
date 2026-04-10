# Any.Do
A modern Todo List application built with **React** and **Tailwind CSS**, featuring authentication, task management, and local storage persistence.

Live Demo: https://aya-abdellatif.github.io/any-do/
![AnyDoDemo](https://github.com/user-attachments/assets/43120dd6-a5d8-4c1e-baf8-6688e3359a95)
---

## Features

* Authentication System

  * Signup
  * Login
  * Store user in `localStorage`

* Task Management

  * Add new tasks
  * Delete tasks
  * Mark tasks as completed
  * Filter tasks (All / Completed)

* User Profile

  * Display user name
  * Show task statistics:

    * Total tasks
    * Completed tasks
    * Pending tasks

* Data Persistence

  * All data stored in `localStorage`
  * Tasks saved per user

* UI/UX

  * Clean and responsive design
  * Built with Tailwind CSS

---

## Technologies Used

* React.js
* Tailwind CSS
* JavaScript (ES6+)
* LocalStorage API
* React Router DOM

---

## Project Structure

```
src/
│
├── components/
│   ├── Home.jsx
│   ├── Navbar.jsx
|   ├── SignIn.jsx
│   ├── SignUp.jsx
│   ├── Tasks.jsx
│   ├── ToDoInput.jsx
│   ├── ToDoList.jsx
│   ├── ToDoFilter.jsx
│   ├── Profile.jsx
│
├── pages/
│   
│
├── assets/
│   └── images, logo, profile pic
│
├── App.jsx
└── main.jsx
```

---

## Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/Aya-Abdellatif/any-do.git
```

2. Navigate to the project folder:

```bash
cd any-do
```

3. Install dependencies:

```bash
npm install
```

4. Run the project:

```bash
npm run dev
```

---

## How It Works

* User signs up or signs in
* User data is stored in `localStorage`
* Task state updates automatically reflect in UI

---

## Future Improvements

* Connect to backend (Node.js / .NET API)
* Store data in database instead of localStorage
* Add mobile responsiveness improvements
* Edit tasks feature
* Upload profile picture
* Dark mode

---

## Author

**Aya Abdellatif**
