// Please don't change the pre-written code
// Import the necessary modules here

export const users = [
  { id: 1, name: "vivek", email: "krvivi28@gmail.com", password: "vivek28@" },
];

export const registerUser = (user) => {
  user.id = users.length+1;
  users.push(user)
  console.log(users)
};

export const authenticateUser = (reqUser) => {
  console.log(reqUser)
  const {email, password} = reqUser;
  const validateUser = users.find((u)=>u.email === email && u.password===password)
  return validateUser;
};
