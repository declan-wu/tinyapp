const express = require("express");
const db = require("../data");
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

// Helper functions for generating random url and full url
let changeToFullUrl = function(longURL) {
  let urlPartsArr = longURL.split("//");
  if (urlPartsArr.length === 1) {
    return "http://" + urlPartsArr[0];
  }
  return longURL;
};

let generateRandomString = function(
  length = 6,
  chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
) {
  let result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

module.exports = router;
