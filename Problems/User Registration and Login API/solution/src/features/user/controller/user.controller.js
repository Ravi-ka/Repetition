import { addUser, confirmLogin } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  const result = addUser(req.body)
  const jsonResponse = {
    "status":"success",
    "user":result
  }
  if(result)
    res.status(201).send(jsonResponse)
};

export const loginUser = (req, res) => {
  const checkUser = confirmLogin(req.body);
  const successResponse = {
    "status":"success",
    "msg":"login successful"
  }
  const failResponse = {
    "status":"failure",
    "msg":"invalid user details"
  }
  if(checkUser)
    res.status(200).send(successResponse)
  else  
    res.status(400).send(failResponse)
};
