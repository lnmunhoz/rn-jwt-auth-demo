import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

const app = express();
const port = process.env.PORT || 3001;

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not set");
}

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
