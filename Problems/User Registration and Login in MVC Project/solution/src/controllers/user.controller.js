import { registerUser, authenticateUser } from "../models/user.model.js";

export default class UserController {
  getRegister = (req, res, next) => {
    res.render('user-register')
  };
  getLogin = (req, res, next) => {
    res.render('user-login')
  };
  addUser = (req, res) => {
    registerUser(req.body);
    res.render('user-login')
  };
  loginUser = (req, res) => {
    const loginResult = authenticateUser(req.body)
    if(loginResult){
      res.send({success:'true',message:'Login successful'})
    }
    else{
      res.send({success:'false',message:'Login failed'})
    }
  };
}
