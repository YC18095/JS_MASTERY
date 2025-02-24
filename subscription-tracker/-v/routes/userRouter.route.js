import { Router } from "express";
import { getAllUsers, getUser } from "../controllers/user.controller.js";
import { authorize } from "../middleware/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getAllUsers);

userRouter.get("/:id", authorize, getUser);

userRouter.post("/", (req, res) => {
  res.send({ title: "Create A New User" });
});

userRouter.put("/:id", (req, res) => {
  res.send({ title: "Update User" });
});

userRouter.delete("/:id", (req, res) => {
  res.send({ title: "Delete User" });
});

export { userRouter };
