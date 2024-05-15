const { BlogRepository } = require("../repository/index");

class BlogService {
  constructor() {
    this.blogRepository = new BlogRepository();
  }

  async createBlog(data) {
    try {
      const response = await this.blogRepository.createBlog(data);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async destroyAllBlogs() {
    try {
      const response = this.blogRepository.destroyAllBlogs();
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async deleteBlog(blogId) {
    try {
      const response = this.blogRepository.deleteBlog(blogId);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async updateBlog(blogId, data) {
    try {
      const response = await this.blogRepository.updateBlog(blogId, data);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async getBlog(blogId) {
    try {
      const response = await this.blogRepository.getBlog(blogId);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async getAllBlogs() {
    try {
      const response = await this.blogRepository.getAllBlogs();
      return response;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = BlogService;
