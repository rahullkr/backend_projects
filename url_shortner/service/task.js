const TaskRepository = require("../repository/task");
const shortId = require("short-unique-id");
class TaskService {
  constructor() {
    this.taskRepository = new TaskRepository();
  }
  async createShortner(data) {
    try {
      const uid = new shortId({ length: 10 });
      const new_data = uid.rnd();
      const shortUrl = `http://localhost:3000/api/${new_data}`;

      const urlData = {
        originalUrl: data.long_url,
        shortUrl: shortUrl,
      };

      const response = await this.taskRepository.createShortner(urlData);

      return response;
    } catch (error) {
      console.log(error, "serivce me");
    }
  }
  async findShortner(id) {
    try {
      const response = await this.taskRepository.findShortner(id);
      return response;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = TaskService;
