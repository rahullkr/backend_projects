const Task = require("../models/task");

class TaskRepository {
  async createExpense(data) {
    try {
      const response = Task.create(data);
      return response;
    } catch (error) {
      throw { error };
    }
  }


}

module.exports = TaskRepository;
