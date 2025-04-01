import { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { authenticateToken } from "../middleware/auth.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);

// Protected route example
router.get("/me", authenticateToken, (req, res) => {
  res.json({
    message: "Protected route accessed successfully",
    user: (req as any).user,
  });
});

export default router;
