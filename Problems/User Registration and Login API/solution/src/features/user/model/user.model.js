// Please don't change the pre-written code
// Import the necessary modules here

const users = [];
let id = 0;
class UserSchema {
  constructor(name, email, password) {
    this.id = ++id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export const addUser = (data) => {
  data.id = users.length+1;
  users.push(data)
  return data;
};
addUser({ name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" });

export const confirmLogin = (data) => {
  const {email, password} = data;
  const checkUser = users.find((u)=>u.email == email && u.password == password)
  return checkUser;
};

export const getAllUsers = () => {
  return users;
};
