const { UserService } = require("../services/index");
const userService = new UserService();
const bcrypt = require("bcryptjs");

const create = async (req, res) => {
  const { email, password } = req.body;
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(toString(password), salt);
    const val = await userService.createUser({ email, password: hash });
    console.log(val);
    return res.status(201).json({
      success: true,
      message: "successfully created an user",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "some error occured",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.getData(email);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const passwordMatch = bcrypt.compareSync(
      password.toString(),
      user.password
    );
    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "some error occured",
    });
  }
};

module.exports = {
  create,
  login,
};
