import { Request, Response, Router } from "express";
import { register,login } from "../controllers/auth.controller";
import { logMiddleware } from "../middleware/log";

const router = Router();
// auth/..
router.post("/login",login);
router.post("/register", register);


export { router };
