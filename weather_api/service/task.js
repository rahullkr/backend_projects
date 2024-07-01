const TaskRepository = require("../repository/task");
class TaskService {
  constructor() {
    this.taskRepository = new TaskRepository();
  }
  async createExpense(data) {
    try {
      const response = await this.taskRepository.createExpense(data);
      return response;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = TaskService;
