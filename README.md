# Express, Mongo, Vite, TS Fullstack Starter Project

### *A zero-config starter npm package to scaffold a fullstack monorepo with:*

- ⚙️ **Backend**: Node.js + Express.js + MongoDB + TypeScript + JWT-Auth
- ⚛️ **Frontend**: React.js + Vite + TypeScript

---

## 🚀 Usage

### Create in a new folder

```bash
npx express-mongo-vite-ts-starter my-app
```

Creates:

```
current directory/
├──my-app/
   ├── backend/
   └── frontend/
```

### Create in current directory

```bash
npx express-mongo-vite-ts-starter
```

Creates:

```
current directory/
├── backend/
└── frontend/
```

---

## 📁 Project Structure

```
my-app/
├── backend/        # Express.js + MongoDB + TypeScript API for basic user authorization
│   └── ...
├── frontend/       # Vite + React + TypeScript Template App
│   └── ...
├── README.md       # README.md with steps to setup .env & prerequite details
```

---

## ⚙ Prerequisites

**You will require the following, installed in your system, for the project to function properly:**
1. **Node.js** (use v20.0.0 or higher for better compatibility)
2. **Redis**: In-memory DB (v5.0.0.0 or higher)

---


## 🛠 Setup Instructions

### 1. Install dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
```

### 2. Configure Environment Variables

Create `.env` files in both `backend/` and `frontend/`:

#### Example backend `.env`

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db
JWT_SECRET=your-secret-key
NODE_ENV=development

ADMIN_PASSWORD=your-admin-password
```

#### Example frontend `.env`

```
VITE_API_BASE_URL=http://localhost:5000/api
```

---

## 🧪 Development

Under `backend/` execute:

```bash
npm run dev     # Start backend
```

Under `frontend/` execute:

```bash
npm run dev     # Start frontend
```

---

## 📤 Publish Your App

Once you're ready to go live, build the frontend and deploy the backend. Tailor build steps to your hosting solution.

---

## 🙌 Credits

Created by [Tamojit Das](https://github.com/Tamoziit)

---

## 📄 License

This CLI tool scaffolds projects without including the original repository's license.

---

*Let me know for potential issues & fixes for this project. Your feedback is extremely appreciable...*<br>
*~ Tamojit Das*

