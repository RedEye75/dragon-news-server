const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");

app.use(cors());
// create api
app.get("/", (req, res) => {
  res.send("dragon news server running");
});

app.get("/category", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log("dragon news server running on port", port);
});
