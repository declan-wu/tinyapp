const express = require("express");
const db = require("../data/urlDatabase");
const { generateRandomString, changeToFullUrl } = require("../helper");
const router = express.Router();

router.get("/", (req, res) => {
  let templateVars = {
    username: req.cookies.username,
    urls: db
  };
  res.render("urls_index", templateVars);
});

router.post("/", (req, res) => {
  const fullUrl = changeToFullUrl(req.body.longURL);
  const shortUrl = generateRandomString();
  db[shortUrl] = fullUrl;
  res.redirect(303, `urls/${shortUrl}`);
});

router.get("/new", (req, res) => {
  let templateVars = {
    username: req.cookies.username
    // urls: db
  };
  res.render("urls_new", templateVars);
});

router.get("/:shortURL", (req, res) => {
  const templateVars = {
    shortURL: req.params.shortURL,
    longURL: db[req.params.shortURL],
    username: req.cookies.username
  };
  res.render("urls_show", templateVars);
});

router.post("/:shortURL/edit", (req, res) => {
  db[req.params.shortURL] = changeToFullUrl(req.body.longURL);
  res.redirect("/urls");
});

router.post("/:shortURL/delete", (req, res) => {
  delete db[req.params.shortURL];
  res.redirect("/urls");
});

module.exports = router;
