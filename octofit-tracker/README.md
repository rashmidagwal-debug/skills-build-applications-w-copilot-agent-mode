# OctoFit Tracker

A modern multi-tier fitness tracking application for Mergington High School. Built with React 19 (frontend) and Node.js + Express + TypeScript (backend), connected to MongoDB.

## Application Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite application
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
└── backend/           # Node.js + Express + TypeScript API
    ├── src/
    │   ├── models/
    │   └── index.ts
    ├── dist/
    ├── package.json
    ├── tsconfig.json
    └── .env.example
```

## Technology Stack

### Frontend
- **React 19** - Latest React version
- **Vite** - Fast build tool and dev server
- **Port**: 5173

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type-safe development
- **Mongoose** - MongoDB ODM
- **Port**: 8000

### Database
- **MongoDB** - NoSQL database
- **Port**: 27017

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB running locally or connection string

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
cp .env.example .env
npm run dev
```

The backend API will be available at `http://localhost:8000`

## API Endpoints

### Health Check
- `GET /api/health` - Check backend status

## Features

### Implemented
- ✅ Backend server setup with Express and TypeScript
- ✅ MongoDB connection with Mongoose
- ✅ User and Activity data models
- ✅ Frontend React application with Vite
- ✅ Health check API endpoint

### Coming Soon
- 🔄 User authentication and registration
- 🔄 Activity logging endpoints
- 🔄 Team management
- 🔄 Leaderboard functionality
- 🔄 Achievement badges system
- 🔄 Responsive UI components

## Development

### Running Both Servers

Open two terminal windows:

**Terminal 1 - Frontend:**
```bash
cd octofit-tracker/frontend
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd octofit-tracker/backend
npm run dev
```

## Build for Production

### Frontend
```bash
cd octofit-tracker/frontend
npm run build
```

### Backend
```bash
cd octofit-tracker/backend
npm run build
npm start
```

## MongoDB Setup

If running MongoDB locally:

```bash
# Using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest

# Or using Homebrew (macOS)
brew services start mongodb-community
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

## Contributing

This is part of the GitHub Copilot agent mode workshop for Mergington High School.

## License

MIT
