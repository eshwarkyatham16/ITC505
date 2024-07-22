const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
// Routes
app.get("/do_a_random", (req, res) => {
  res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});
// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, "public");
app.use(express.static(publicServedFilesPath));

let port = process.env.PORT || 80;
if (process.argv[2] === "local") {
  port = 8080;
}

app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
  res.cookie("name", "Eshwar");
  res.cookie("email", "eshwar@example.com");
  res.send("Cookies have been set");
});

app.get("/get-cookie", (req, res) => {
  const name = req.cookies.name;
  const email = req.cookies.email;
  res.send(`Name: ${name}, Email: ${email}`);
});

app.get("/home", (req, res) => {
  res.send("Welcome to Home Page");
});

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
