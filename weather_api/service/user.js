const UserRepository = require("../repository/user");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async createUser(data) {
    try {
      const response = await this.userRepository.createUser(data);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async getUser(data) {
    try {
      const response = await this.userRepository.getUser(data);
      const token = response.genJWT();
      console.log(token);
      return response;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = UserService;
