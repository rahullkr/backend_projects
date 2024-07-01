const UserService = require("../service/user");

const userService = new UserService();

const register = async (req, res) => {
  try {
    const response = await userService.createUser(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "user is successfully registered",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      err: error,
      message: "some error occured",
    });
  }
};

const login = async (req, res) => {
  try {
    const response = await userService.getUser(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully loggedin",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      err: error,
      message: "some error occured",
    });
  }
};

module.exports = {
  register,
  login,
};
