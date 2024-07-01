const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const ApiRoutes = require("./routes/index");
const connect = require("./config/database");
app.use(bodyParser.json());
app.use("/api", ApiRoutes);
app.listen(3000, async () => {
  console.log("server is running on port 3000");
  await connect();
  console.log("mongodb connected");
});
