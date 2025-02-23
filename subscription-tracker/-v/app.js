import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from "./config/env.js";
import { authRouter } from "./routes/authRouter.route.js";
import { userRouter } from "./routes/userRouter.route.js";
import { subscriptionRoute } from "./routes/subscription.route.js";
import connectToDatabase from "./database/mongoose.js";
import errorMiddleware from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subscriptionRoute);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("WelCome to the subscription Tracker API");
});

app.listen(PORT, async () => {
  console.log(
    `Tracker Subscription API Is Listening on http://localhost:${PORT}`
  );

  await connectToDatabase();
});
