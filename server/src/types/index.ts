import { Request } from "express";

export interface User {
  id: string;
  email: string;
  password: string;
}

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
  };
}
