# Todo List App (JavaScript)

A simple and interactive **Todo List application** built using **Vanilla JavaScript**, **HTML**, and **CSS**.
This app allows users to add tasks, delete tasks, search/filter tasks, and clear all tasks dynamically.

---

## ✨ Features

* ➕ Add new tasks
* 🗑️ Delete individual tasks
* 🧹 Clear all tasks at once
* 🔍 Search & filter tasks in real-time
* 📊 Live pending task counter
* ⚡ Fast and lightweight (no libraries)

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Bootstrap Icons (for delete icon)

---

## 📂 Project Structure

```text
todo-app/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## 🚀 How It Works

### 1️⃣ Add Task

* User types a task and submits the form
* Task is added dynamically to the task list
* Empty input is ignored

### 2️⃣ Delete Task

* Click the trash icon 🗑️ to remove a task
* Uses **event delegation** for efficiency

### 3️⃣ Clear All Tasks

* Removes all tasks from the list
* Updates task counter automatically

### 4️⃣ Search / Filter Tasks

* Type in the search input
* Tasks that do not match are hidden
* Matching tasks remain visible

---

## 📊 Task Counter Logic

```js
You have X pending tasks.
```

The counter updates automatically when:

* Adding a task
* Deleting a task
* Clearing all tasks

---

## ▶️ Usage

1. Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
```

2. Open `index.html` in your browser

3. Start managing your tasks ✅

---

## 📌 Future Improvements

* Save tasks using localStorage
* Mark tasks as completed
* Edit existing tasks
* Dark mode support

---

## 👨‍💻 Author

**TUN TUN OO**
Practicing JavaScript DOM & Events 🚀

---

## 📄 License

This project is open-source and free to use.
