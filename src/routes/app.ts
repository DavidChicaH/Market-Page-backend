import { Router } from "express";
import { createUser, getUserById, getUsers } from "../controllers/index.controller";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
//router.put("/users/:id", (req, res) => res.send("users"));
//router.delete("/users/:id", (req, res) => res.send("users"));

export default router;
