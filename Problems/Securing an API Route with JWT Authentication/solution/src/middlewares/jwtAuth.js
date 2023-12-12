import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const token = req.cookies.jwtToken;
  console.log(token);
  if (!token) {
    res.status(401).json({ success: "false", msg: "error" });
  }
  try {
    const payload = jwt.verify(token, "yyHpjcXhSei3lSEtA42ZqUVhB1n8ZNxR");
  } catch (error) {
    res.status(401).json({ success: "false", msg: "error" });
  }
  next();
};

export default jwtAuth;
