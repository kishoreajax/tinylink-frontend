## TinyLink — URL Shortener with Click Analytics

TinyLink is a full-stack URL shortening system that allows users to create short URLs with optional custom aliases, redirect instantly, and track analytics including total clicks and last clicked timestamp.  
The platform consists of a React + Vite frontend, an Express backend, and a PostgreSQL database hosted on Neon.

### Live Deployment

Frontend: https://tinylink-frontend-six.vercel.app  
Backend API: https://tinylink-backend-qng1.onrender.com

### Features
- Create short URLs
- Custom code support
- Instant redirection
- Click analytics
- Stats page
- Copy-to-clipboard
- Delete link
- `/healthz` health endpoint

### Tech Stack
Frontend: React, Vite  
Backend: Node.js, Express  
Database: Neon PostgreSQL  
Hosting: Vercel + Render

### Architecture
Vercel (React) → Render (Express API) → Neon (Postgres database)

### API Endpoints
GET /api/links — list all links  
POST /api/links — create link  
GET /api/links/:code — link statistics  
DELETE /api/links/:code — delete link  
GET /healthz — service health

### Run Locally
Backend:
1. npm install
2. Add .env:
   DATABASE_URL, BASE_URL, PORT
3. npm start

Frontend:
1. npm install
2. npm run dev

### License
MIT License

### Author
Kishore A D
