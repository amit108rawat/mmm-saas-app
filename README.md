# Marketing Mix Modelling (MMM) SaaS Application

A modern web application for Marketing Mix Modelling with React TypeScript frontend and Node.js backend.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS
- **Charts**: Chart.js + React Chart.js 2
- **State Management**: Zustand
- **HTTP Client**: Axios

## Project Structure

```
mmm-saas-app/
├── frontend/          # React TypeScript frontend
├── backend/           # Node.js Express backend
├── shared/            # Shared types and utilities
├── docker-compose.yml # Local development setup
└── README.md
```

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account

### Setup

1. Clone the repository:
```bash
git clone https://github.com/amit108rawat/mmm-saas-app.git
cd mmm-saas-app
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Environment Setup:
```bash
# Copy environment files
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
```

4. Configure Supabase:
   - Create a new project at https://supabase.com
   - Update environment variables with your Supabase credentials

5. Start development servers:
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## Features

- 🔐 Authentication with Supabase
- 📊 Interactive data visualization
- 📈 Marketing mix modeling algorithms
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🔄 Real-time data updates

## License

MIT License