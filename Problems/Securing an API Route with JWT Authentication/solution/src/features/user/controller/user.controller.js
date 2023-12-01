import jwt from "jsonwebtoken";

import { addUser, confirmLogin } from "../model/user.model.js";
export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);
  if (status) {
    const token = jwt.sign(
      {
        email: status.email,
      },
      "yyHpjcXhSei3lSEtA42ZqUVhB1n8ZNxR",
      {
        expiresIn: "1h",
      }
    );
    res.cookie("jwtToken", token);
    res
      .status(200)
      .json({ status: "success", msg: "login successfull", token });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
