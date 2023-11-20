// Please don't change the pre-written code
// Import the necessary modules here

import { updateUsers, users } from "./user.model.js";

export const renderUpdateForm = (req, res) => {
  res.render("update-form", { user: users[0] });
};

export function updateUser(req, res){
  const newUpdateReq = req.body;
  //console.log(newUpdateReq)
  updateUsers(newUpdateReq)
  res.render('update-form',{ user: users[users.length-1] })
}
