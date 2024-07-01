const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.sendStatus(401);
  }

  const token = authHeader.split(" ")[1];
  console.log(token);
  const data = jwt.verify(token, "user_secret");
  console.log(data);
  if (!token) {
    console.log("No token found in Authorization header");
    return res.sendStatus(401);
  }

  next();
}

module.exports = authenticateToken;
