import User from "../models/userModels.js";
import bcrypt from "bcryptjs";
import AppError from "../utils/error.utils.js";

const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000,
  httpOnly: true,
  secure: true,
};

const register = async (req, res, next) => {
  const { userName, email, password } = req.body;

  if (!userName || !email || !password) {
    // return res.send({
    //     message:"all fields are required"
    // })
    return next(new AppError("All fields are require", 400));
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    return next(AppError("Email Already exist", 400));
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
  });

  if (!user) {
    return next(new AppError("user registration failed", 400));
  }

  user.password = undefined;

  const token = await user.generateAccessToken();

  res.cookie("token", token, cookieOptions);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
  });
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("req.body", req.body);

    if (!email || !password) {
      return next(new AppError("All fields are require", 400));
    }

    const userExist = await User.findOne({ email }).select("+password");
    console.log("userExist", userExist);

    if (!userExist || !userExist.isPasswordCorrect(password)) {
      return next(new AppError("Email or password does not match", 400));
    }

    const token = await userExist.generateAccessToken();
    userExist.password = undefined;

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: userExist,
    });
  } catch (error) {
    console.error(error);
    return next(new AppError(error.message, 500));
  }
};

const logout = async (req, res) => {
  res.cookie("token", null, {
    secure: true,
    maxAge: 0,
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "User logout successfully",
  });
};

export { register, login, logout };
