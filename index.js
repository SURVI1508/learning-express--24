const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello 2024");
});

app.listen(port, () => {
  console.log(`Server ready on port : ${port} 🪂`);
});
