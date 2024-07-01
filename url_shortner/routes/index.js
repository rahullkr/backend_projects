const express = require("express");
const UrlController = require("../controllers/task");
const router = express.Router();
router.post("/new", UrlController.shortner);
router.get("/:id", UrlController.find);

module.exports = router;
