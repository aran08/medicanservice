const UserService = require("../services/user-service");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const user = await userService.CreateUser(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a user",
      data: user,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a user",
      err: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await userService.LoginUser(req.body);
    return res.status(200).json({
      success: true,
      message: "Successfully Login",
      token: user,
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to login a user",
      err: error,
    });
  }
}

module.exports = {
  create,
  login
};
