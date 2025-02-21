import { Router } from "express";

const subscriptionRoute = Router();

subscriptionRoute.get("/", (req, res) => {
  res.send("GET ALL SUBSCRIPTIONS");
});

export { subscriptionRoute };
