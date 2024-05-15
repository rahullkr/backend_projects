const { BlogService } = require("../services/index");
const blogService = new BlogService();
console.log(blogService);
const create = async (req, res) => {
  try {
    const blog = await blogService.createBlog(req.body);
    return res.status(201).json({
      data: blog,
      success: true,
      message: "successfully created a blog",
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
    const response = await blogService.deleteBlog(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully deleted a blog",
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

const destroyAll = async (req, res) => {
  try {
    const response = await blogService.destroyAllBlogs();
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully all data deleted",
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
    const response = await blogService.getBlog(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched a blog",
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
    const response = await blogService.getAllBlogs();
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched all blogs",
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
    const response = await blogService.updateBlog(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully updated the blog",
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
  destroyAll,
  getAll,
};
