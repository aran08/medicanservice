const UserRepository = require("../repository/user");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async CreateUser(data) {
    try {
      const user = await this.userRepository.CreateUser(data);
      return user;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }

  async LoginUser(data) {
    try {
      const user = await this.userRepository.Login(data);
      return user;
    } catch (error) {
      console.log("Something went wrong at the service layer");
      throw error;
    }
  }
}

module.exports = UserService;
