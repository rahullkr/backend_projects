const { TaskRepository } = require("../repository/index");

class TaskService {
  constructor() {
    this.taskRepository = new TaskRepository();
  }

  async createTask(data) {
    try {
      const response = await this.taskRepository.createTask(data);
      console.log(response);
      return response;
    } catch (error) {
      throw { error };
    }
  }

  async deleteTask(taskId) {
    try {
      const response = this.taskRepository.deleteTask(taskId);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async updateTask(taskId, data) {
    try {
      const response = await this.taskRepository.updateTask(taskId, data);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async getTask(taskId) {
    try {
      const response = await this.taskRepository.getTask(taskId);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async getAllTasks() {
    try {
      const response = await this.taskRepository.getAllTasks();
      return response;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = TaskService;
