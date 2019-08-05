const express = require("express");
const app = express();
const PORT = 8080; // default port 8080

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file
// index page
app.get("/", function(req, res) {
  res.render("pages/index");
});

// about page
app.get("/about", function(req, res) {
  res.render("pages/about");
});

const urlDatabase = {
  b2xVn2: "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

app.get("/urls", (req, res) => {
  let templateVars = { urls: urlDatabase };
  res.render("pages/urls_index", templateVars);
});

app.get("/urls/:shortURL", (req, res) => {
  console.log(req.params);
  let templateVars = {
    shortURL: req.params.shortURL,
    longURL: urlDatabase[req.params.shortURL]
  };
  res.render("pages/urls_show", templateVars);
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
