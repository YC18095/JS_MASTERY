import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({ title: "Get All Users" });
});

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
