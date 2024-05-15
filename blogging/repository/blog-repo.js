const { blog } = require("../models/index");

class BlogRepository {
  async createBlog({ name, content }) {
    try {
      const value = await blog.create({ name: name, content: content });

      return value;
    } catch (error) {
      throw { error };
    }
  }

  async deleteBlog(blogid) {
    try {
      await blog.destroy({
        where: {
          id: blogid,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }
  async destroyAllBlogs() {
    try {
      await blog.destroy({ where: {}, truncate: true });
      return true;
    } catch (error) {
      throw { error };
    }
  }
  async updateBlog(blogId, data) {
    try {
      const value = await blog.update(data, {
        where: {
          id: blogId,
        },
      });
      return value;
    } catch (error) {
      throw { error };
    }
  }

  async getBlog(blogId) {
    try {
      const value = await blog.findByPk(blogId);
      // console.log(value);
      return value;
    } catch (error) {
      throw { error };
    }
  }

  async getAllBlogs() {
    try {
      const values = await blog.findAll();
      return values;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = BlogRepository;
