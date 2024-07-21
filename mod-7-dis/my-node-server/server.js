const express = require("express");
const app = express();
const port = 8080;

app.get("/home", (req, res) => {
  res.send("Welcome to Home Page");
});

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
