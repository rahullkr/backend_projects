const { UserRepository } = require("../repository/index");

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
  async getData(data){
 
    try {
     
        const response = await this.userRepository.getData(data);
        
        return response;
    } catch (error) {
        throw {error};
    }
  
  }
}

module.exports = UserService;