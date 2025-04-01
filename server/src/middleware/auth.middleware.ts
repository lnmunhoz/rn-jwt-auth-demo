import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../types";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authentication token required" });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET!);
    (req as AuthRequest).user = user as { id: string; email: string };
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
