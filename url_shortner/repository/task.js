const Url = require("../models/Url");
class TaskRepository {
  async createShortner(data) {
    try {
      if (
        typeof data.originalUrl !== "string" ||
        typeof data.shortUrl !== "string"
      ) {
        throw new Error("Invalid URL data");
      }

      const newUrl = new Url(data);
      const response = await newUrl.save();
      return response;
    } catch (error) {
      throw { error };
    }
  }

  async findShortner(id) {
    try {
      const response = await Url.findOne({
        shortUrl: `http://localhost:3000/api/${id}`,
      });
      return response;
    } catch (error) {
      throw { error };
    }
  }
}
module.exports = TaskRepository;
