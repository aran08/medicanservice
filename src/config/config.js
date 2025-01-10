const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_KEY,
    database: process.env.DB_HOST,
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
