const express = require('express')
const BlogControllers = require('../../controllers/blog-controller');
const { route } = require('.');
const router = express.Router();

router.post('/blog', BlogControllers.create);
router.delete('/blog/:id', BlogControllers.destroy);
router.get('/blog/:id', BlogControllers.get);
router.get('/blogs', BlogControllers.getAll);
router.delete('/blogs', BlogControllers.destroyAll);
router.patch('/blog/:id', BlogControllers.update);


module.exports = router;