const express = require("express");
const db = require("../data");
const router = express.Router();
const methodOverride = require("method-override");
// const bodyParser = require("body-parser");
// const app = express();
// app.set("view engine", "ejs");
// app.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.render("urls_index", { urls: db });
});

router.post("/", (req, res) => {
  const fullUrl = changeToFullUrl(req.body.longURL);
  const shortUrl = generateRandomString();
  db[shortUrl] = fullUrl;
  res.redirect(303, `urls/${shortUrl}`);
});

router.get("/new", (req, res) => {
  res.render("urls_new");
});

router.get("/:shortURL", (req, res) => {
  const tempUrls = {
    shortURL: req.params.shortURL,
    longURL: db[req.params.shortURL]
  };
  res.render("urls_show", tempUrls);
});

router.post("/:shortURL/delete", (req, res) => {
  delete db[req.params.shortURL];
  res.redirect("/urls");
  // res.render("urls_index");
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
