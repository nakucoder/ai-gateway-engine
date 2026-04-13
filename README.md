# AI Gateway Engine

A high-performance Node.js/TypeScript API Gateway acting 
as middleware between the frontend and a Python AI Engine.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express
- **Language:** TypeScript
- **AI Engine:** Python / Flask
- **Testing:** Jest & Supertest

## Features
- JWT Authentication securing downstream AI services
- API Routing to internal controllers and external services
- Request and error logging via Winston and Morgan
- Rate Limiting for DDoS protection
- Real-time health monitoring (Heartbeat API)

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables
4. Run: `npm run dev`
