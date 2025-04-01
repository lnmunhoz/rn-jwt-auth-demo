import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { z } from "zod";
import { LoginCredentials, RegisterCredentials, AuthResponse } from "../types";

// In-memory user store (replace with database in production)
const users: { id: string; email: string; password: string }[] = [];

// Initialize users
(async () => {
  const hashedPassword = await bcrypt.hash("password", 10);

  users.push({
    id: "1",
    email: "test@mail.com",
    password: hashedPassword,
  });
})();

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const JWT_SECRET = process.env.JWT_SECRET as Secret;
const JWT_EXPIRES_IN = (process.env.JWT_EXPIRES_IN ||
  "24h") as jwt.SignOptions["expiresIn"];

export const register = async (req: Request, res: Response) => {
  try {
    const credentials: RegisterCredentials = registerSchema.parse(req.body);

    // Check if user already exists
    if (users.find((user) => user.email === credentials.email)) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(credentials.password, 10);

    // Create user
    const user = {
      id: Date.now().toString(),
      email: credentials.email,
      password: hashedPassword,
    };

    users.push(user);

    // Generate token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    const response: AuthResponse = {
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    };

    res.status(201).json(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors[0].message });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const credentials: LoginCredentials = loginSchema.parse(req.body);

    // Find user
    const user = users.find((user) => user.email === credentials.email);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    const response: AuthResponse = {
      token,
      user: {
        id: user.id,
        email: user.email,
      },
    };

    res.json(response);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: error.errors });
    }
    res.status(500).json({ message: "Internal server error" });
  }
};
