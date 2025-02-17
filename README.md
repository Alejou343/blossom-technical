# 🌸 Blossom Technical Fullstack

This repository contains two main projects:

- **Backend**: Located in the `/backend` folder, developed with Express.js.
- **Frontend**: Located in the `/frontend` folder, developed with Vite.

Each project includes a `README.md` with specific execution instructions.

## 📥 Clone the Repository

To get a local copy of the project, run the following command in your terminal:

```bash
git clone https://github.com/Alejou343/blossom-technical.git
cd blossom-technical
```

## ⚙️ Environment Variables

The necessary environment variables have already been configured to facilitate execution for both projects.

Here's a clearer and more structured version of your instructions, including the Redis check:

---

## 🚀 Start the Backend Server

To ensure everything runs smoothly, follow these steps:

1. **Open a terminal and start a Ubuntu shell (if not already in one).**  
   
2. **Verify Redis is running by executing:**  
   ```bash
   redis-cli ping
   ```
   If Redis is running correctly, you should see `PONG`. If not, make sure Redis is installed and running (`sudo service redis-server start`).

3. **Navigate to the backend directory:**  
   ```bash
   cd backend
   ```

4. **Install dependencies:**  
   ```bash
   npm install
   ```

5. **Start the development server:**  
   ```bash
   npm run dev
   ```

Your Express.js backend should now be running! 🚀

The server will run on `http://localhost:3000` or the configured port.

## 💻 Run the Frontend

To start the frontend server with Vite:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173` or the configured port.

---

For more details on the configuration and customization of each project, check the `README.md` inside their respective folders.

