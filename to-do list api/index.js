const express = require("express");
const bodyParser = require("body-parser");

const ApiRoutes = require("./routes/index");
const app = express();
app.use(bodyParser.json());

app.use("/api", ApiRoutes);

app.listen(3000, async () => {
  console.log("server is ruuning on port 3000");
});

