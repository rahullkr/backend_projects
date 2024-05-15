const express = require('express')
const TaskControllers = require('../../controllers/task-controller');
const UserControllers = require('../../controllers/user_controller');
const router = express.Router();

router.post('/create', UserControllers.create);
router.post('/login', UserControllers.login);

router.post('/task', TaskControllers.create);
router.delete('/task:id', TaskControllers.destroy);
router.get('/task/:id', TaskControllers.get);
router.get('/tasks', TaskControllers.getAll);
router.patch('/task/:id', TaskControllers.update);


module.exports = router;