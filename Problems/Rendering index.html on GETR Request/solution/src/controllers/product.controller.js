import path from 'path';

export const getProducts = (req, res) => {
  return res.sendFile(path.join(path.resolve(),'src','views','index.html'))
};
