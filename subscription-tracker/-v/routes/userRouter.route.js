import { Router } from "express";
import { getAllUsers } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.post("/", (req, res) => {
  res.send({ title: "Create A New User" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "Update User" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete User" });
});

userRouter.get("/:id", (req, res) => {
  res.send({ title: "Get User Information" });
});

export { userRouter };
