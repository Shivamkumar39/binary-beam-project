✅ Todo List MERN App with Redux, Animations & Dark Mode
This is a full-featured Todo List Application built using the MERN Stack (MongoDB, Express, React, Node.js) with Redux for state management. The app includes:

🌓 Dark/Light Mode toggle

✅ Add, Mark as Complete, and Delete tasks

🎨 Beautiful UI with hover effects and animations

🔁 Persistent storage with MongoDB

⚛️ Built using Vite for fast development

🔥 Features
Add, delete, and mark tasks as completed

Toggle between light and dark themes

Smooth animations on hover and transitions

Responsive and mobile-friendly design

Redux for predictable state management

Fully working backend with MongoDB

🛠️ Tech Stack
Frontend	Backend	Others
React + Vite	Express.js	MongoDB (local)
Redux Toolkit	Node.js	Tailwind CSS
Axios	Mongoose	Heroicons (UI icons)

🚀 Getting Started
Prerequisites
Node.js and npm

MongoDB installed locally and running

📦 Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/todo-mern-redux.git
cd todo-mern-redux
Install dependencies for frontend

bash
Copy
Edit
cd client
npm install
Install dependencies for backend

bash
Copy
Edit
cd ../server
npm install
Start MongoDB locally

Make sure MongoDB is running on your machine at the default port:

bash
Copy
Edit
mongodb://localhost:27017/tododb
You can start Mongo using:

bash
Copy
Edit
mongod
Run the server

bash
Copy
Edit
cd server
npm run dev
Run the client

bash
Copy
Edit
cd ../client
npm run dev
🗂️ Project Structure
bash
Copy
Edit
root/
├── client/              # React frontend
│   ├── components/      # TodoList, TodoItem, DarkModeToggle etc.
│   ├── redux/           # Redux slices and store
│   └── App.jsx
│
├── server/              # Node.js backend
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express routes for CRUD
│   └── server.js
📸 Screenshots
✅ Coming soon: Preview images of UI with dark/light mode toggle, animations, etc.

🧪 Sample Todo Tasks
json
Copy
Edit
[
  { "title": "Complete assignment", "completed": false },
  { "title": "Read about Redux Toolkit", "completed": true },
  { "title": "Push code to GitHub", "completed": false }
]
🌐 API Endpoints
Method	Route	Description
GET	/api/todos	Get all todos
POST	/api/todos	Add new todo
PATCH	/api/todos/:id	Toggle completion
DELETE	/api/todos/:id	Delete a todo

🧑‍💻 Author
Shivam Kumar
Connect on LinkedIn | Built with ❤️

📄 License
This project is open-source and available under the MIT License.
