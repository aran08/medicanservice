const jwt = require("jsonwebtoken");

const Authorization = (requiredRoles) => {
  return (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    try {
      const decoded = validateToken(token);
      req.user = decoded;

      if (requiredRoles && !requiredRoles.includes(decoded.role)) {
        return res
          .status(403)
          .json({ message: "Access forbidden. Insufficient permissions." });
      }

      next();
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  };
};

module.exports = {
  Authorization,
};
