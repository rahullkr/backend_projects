const { User } = require("../models/index");

class UserRepository {
  async createUser({ email, password }) {
    try {
      const value = await User.create({
        email,
        password,
      });
      // console.log(value);

      return value;
    } catch (error) {
      throw { error };
    }
  }
  async getData(email) {
    // console.log(data, "aaaaaaaa");
    try {
    //   console.log(email);
      const user = await User.findOne({ where: { email } });
      
      return user;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = UserRepository;
