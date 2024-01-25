const { verify } = require("jsonwebtoken");

const authentification = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res
      .status(401)
      .json({ msg: `veillez vous connecter s'il vous plait` });
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload = verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, userName: payload.userName };
    next();
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports =  authentification ;
