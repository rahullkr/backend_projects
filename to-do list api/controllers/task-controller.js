const { TaskService } = require("../services/index");
const taskService = new TaskService();
// console.log(taskService);
const create = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    console.log(task);
    return res.status(201).json({
      data: task,
      success: true,
      message: "successfully created a task",
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

const destroy = async (req, res) => {
  try {
    const response = await taskService.deleteTask(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully deleted a task",
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



const get = async (req, res) => {
  try {
    const response = await taskService.getTask(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched a task",
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

const getAll = async (req, res) => {
  try {
    const response = await taskService.getAllTasks();
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched all tasks",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: [],
      success: false,
      err: error,
      message: "some error occurred",
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await taskService.updateTask(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully updated the task",
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
  update,
  get,
  destroy,
  getAll,
};
