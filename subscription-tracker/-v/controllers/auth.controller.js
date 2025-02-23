import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Expire_Time, JWTSECRET } from "../config/env.js";

export const signUp = async (req, res, next) => {
  console.log("Running Sign Up API");
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { email, password, name } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("User already exists");
      error.statusCode = 409;
      throw error;
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create(
      [{ name, email, password: hashedPassword }],
      { session }
    );

    const token = jwt.sign({ userId: newUser[0]._id }, JWTSECRET, {
      expiresIn: Expire_Time,
    });

    await session.commitTransaction();
    await session.endSession();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        token,
        user: newUser[0],
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    console.log("Running Sign In Api");
    const { email, password } = req.body;

    console.log("Email", email);

    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      const error = new Error("Invalid password");
      error.statusCode = 401;
      throw error;
    }

    const token = await jwt.sign({ userId: user._id }, JWTSECRET, {
      expiresIn: Expire_Time,
    });

    res.status(200).json({
      success: true,
      message: "User sign in successfully",
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

// export const signOut = async (req, res, next) => {};
