# React Native JWT Authentication Demo

A full-stack authentication demo project featuring a React Native mobile app with Expo and an Express.js backend server. This project demonstrates secure JWT-based authentication with TypeScript, modern best practices, and a clean architecture.

## Project Structure

```
.
├── mobile/          # React Native mobile app with Expo
└── server/          # Express.js backend server
```

## Features

- 🔐 JWT-based authentication
- 📱 Cross-platform mobile app (iOS & Android)
- 🚀 Modern tech stack with TypeScript
- 🔒 Secure password hashing with bcrypt
- 📝 Input validation with Zod
- 📊 Logging with Winston
- 🧪 Jest testing setup

## Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)
- Expo CLI
- iOS Simulator (for Mac users) or Android Studio (for Android development)

## Getting Started

### Backend Server

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the server directory with the following variables:

   ```
   PORT=3001
   JWT_SECRET=your_jwt_secret_here
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

### Mobile App

1. Navigate to the mobile directory:

   ```bash
   cd mobile
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the Expo development server:

   ```bash
   pnpm start
   ```

4. Press `i` to open in iOS simulator or `a` to open in Android emulator

## Available Scripts

### Backend Server

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build the TypeScript project
- `pnpm start` - Start the production server
- `pnpm test` - Run tests

### Mobile App

- `pnpm start` - Start Expo development server
- `pnpm ios` - Start iOS simulator
- `pnpm android` - Start Android emulator
- `pnpm web` - Start web development server
- `pnpm test` - Run tests

## Tech Stack

### Backend

- Express.js
- TypeScript
- JWT for authentication
- Zod for validation
- Winston for logging
- Jest for testing

### Mobile

- React Native with Expo
- TypeScript
- Expo Router for navigation
- AsyncStorage for local storage
- Jest for testing

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
