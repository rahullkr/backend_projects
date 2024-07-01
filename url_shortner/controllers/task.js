const TaskService = require("../service/task");
const taskService = new TaskService();
const shortner = async (req, res) => {
  try {
    const response = await taskService.createShortner(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "url is added to database",
    });
  } catch (error) {
    console.log(error, "controllers me");
    return res.status(500).json({
      data: {},
      success: false,
      message: "some error occured",
    });
  }
};
const find = async (req, res) => {
  try {
    const response = await taskService.findShortner(req.params.id);
    if (response) {
      return res.redirect(response.originalUrl);
    } else {
      return res.status(404).json({
        data: {},
        success: false,
        message: "URL not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Some error occurred",
    });
  }
};

module.exports = {
  shortner,
  find,
};
