import { getAllUsers } from "../features/user/model/user.model.js";

const basicAuthMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization']
  if(!authHeader){
    res.status(401).json({"success":"false","message":"no authorization details found"})
  }
  const base64Credentials = authHeader.replace('Basic ','');
  const decodedCreds =Buffer.from(base64Credentials,'base64').toString('utf8');
  const creds = decodedCreds.split(':')
  const user = getAllUsers().find((u)=>u.email == creds[0] && u.password == creds[1]);
  if(user)
    next();
  else
    res.status(401).json({"success":"false","message":"authorization failed"})
};

export default basicAuthMiddleware;
