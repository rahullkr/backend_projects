const User  =  require("../models/user");

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      throw { error };
    }
  }
  async getUser(data) {
    try {
      
      const resposne = await User.findOne({ email: data.email }).exec();
      // console.log(resposne);
      return resposne;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = UserRepository;
