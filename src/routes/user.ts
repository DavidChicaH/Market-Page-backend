import { Router } from "express";

const userRouter = Router();

userRouter.post("/users") // create user
userRouter.get("/users/:id") // get user by id