const { User } = require("../models/index");
const jwt = require('jsonwebtoken');

const JWT_KEY = process.env.JWT_KEY;

class UserRepository {
  async CreateUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async Login(data) {
    try {
      const { email, password } = data;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { message: "User not found" };
      }

      const isPasswordValid = password === user.password;
      if (!isPasswordValid) {
        throw { message: "Invalid password" };
      }
      const newJWT = this.createToken({email: user.email, id: user.id, role: user.role});
      return newJWT;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d'});
      return result;
    } catch (error) {
      console.log("Something went wrong in token creation");
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("Something went wrong in token validation", error);
      throw error;
    }
  }
}

module.exports = UserRepository;
