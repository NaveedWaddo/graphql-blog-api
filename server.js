const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

app.listen(process.env.PORT, () => {
  console.log(`"App listening on port ${process.env.PORT}`);
});
