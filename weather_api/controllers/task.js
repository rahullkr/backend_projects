const TaskService = require("../service/task");

const taskService = new TaskService();

const addExpense = async (req, res) => {
  try {
    const response = await taskService.createExpense(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "expense is added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: true,
      message: "some error occured",
    });
  }
};

module.exports = {
  addExpense,
};
