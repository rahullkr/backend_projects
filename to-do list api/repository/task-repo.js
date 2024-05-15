const { Task } = require("../models/index");

class TaskRepository {
  async createTask({ userId, taskName, status }) {
    try {
      const value = await Task.create({
        userId,
        taskName,
        status,
      });
      console.log(value);

      return value;
    } catch (error) {
      throw { error };
    }
  }

  async deleteTask(taskId) {
    try {
      await Task.destroy({
        where: {
          id: taskId,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }

  async updateTask(taskId, data) {
    try {
      const value = await Task.update(data, {
        where: {
          id: taskId,
        },
      });
      return value;
    } catch (error) {
      throw { error };
    }
  }

  async getTask(taskId) {
    try {
      const value = await Task.findByPk(taskId);
      // console.log(value);
      return value;
    } catch (error) {
      throw { error };
    }
  }

  async getAllTasks() {
    try {
      const values = await Task.findAll();
      return values;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = TaskRepository;
