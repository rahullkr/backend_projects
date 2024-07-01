const express = require("express");
const UserController = require("../controllers/user");
const router = express.Router();
const TaskController = require("../controllers/task");
const authenticateToken = require("../middlewares/authenticate");

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.post("/addExpense", authenticateToken, TaskController.addExpense);

module.exports = router;
