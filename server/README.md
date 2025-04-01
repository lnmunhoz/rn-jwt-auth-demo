# JWT Authentication API

A simple Express.js API with JWT authentication built with TypeScript.

## Features

- User registration with password hashing
- User login with JWT token generation
- Protected routes using JWT authentication
- Input validation using Zod
- TypeScript support
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- pnpm

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Create a `.env` file in the root directory with the following variables:

```env
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=24h
```

3. Start the development server:

```bash
pnpm dev
```

4. Build for production:

```bash
pnpm build
```

5. Start the production server:

```bash
pnpm start
```

## API Endpoints

### Authentication

#### Register

- **POST** `/api/auth/register`
- Body:

```json
{
  "email": "user@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

#### Login

- **POST** `/api/auth/login`
- Body:

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Get Current User

- **GET** `/api/auth/me`
- Headers:
  - `Authorization: Bearer <token>`

### Health Check

- **GET** `/health`

## Security Notes

- This is a demo implementation using in-memory storage. In production:
  - Use a proper database
  - Implement rate limiting
  - Use HTTPS
  - Store JWT_SECRET securely
  - Implement refresh tokens
  - Add password complexity requirements
  - Add email verification
