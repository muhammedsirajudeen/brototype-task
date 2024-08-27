import { Request, Response } from "express";
import User from "../model/User";
import jwt from "jsonwebtoken";

import { hashPassword,comparePasswords } from "../helper/bcryptHelper";
//dont forget to hash the password being stored
const CredentialSignup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      res.status(200).json({ message: "user already exists" });
    } else {
      let hashedPassword=await hashPassword(password)
      const newUser = new User({
        email: email,
        password: hashedPassword,
      });
      await newUser.save();
      res.status(200).json({ message: "success" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "server error occured" });
  }
};

const CredentialSignin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      
      if (checkUser.email === email && await comparePasswords(password,checkUser.password)) {
        const token = jwt.sign(
          {
            id: checkUser.id,
            email: checkUser.email,
            password: checkUser.password,
          },
          process.env.SECRET_KEY ?? "",
          { expiresIn: "1h" }
        );
        res.status(200).json({ message: "success", token: token });
      } else {
        res.status(200).json({ message: "invalid credentials" });
      }
    } else {
      res.status(200).json({ message: "please signup first" });
    }
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "server error occured" });
  }
};

export default {
  CredentialSignup,
  CredentialSignin,
};
