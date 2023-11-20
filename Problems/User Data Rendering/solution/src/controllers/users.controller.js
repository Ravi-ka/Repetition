import { userModel } from "../models/users.model.js";

export const userController = async (req, res) => {
  const userData = await userModel();
  //console.log(userData)
  res.render('index',{userData:userData})
};
