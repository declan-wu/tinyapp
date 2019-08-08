const express = require("express");
const users = require("../data/users");
const urlDatabase = require("../data/urlDatabase");
const moment = require("moment");

const {
  generateRandomString,
  changeToFullUrl,
  filterUrl
} = require("../helper");

const router = express.Router();

router.all("/", (req, res, next) => {
  if (!users[req.session.user_id]) {
    res.redirect("/error/pleaseLogin");
    return;
  } else {
    next();
    return;
  }
});

router.get("/", (req, res) => {
  let templateVars = {
    user_id: req.session.user_id,
    urls: filterUrl(req.session.user_id, urlDatabase),
    email: users[req.session.user_id].email
  };
  res.render("urls_index", templateVars);
});

router.post("/", (req, res) => {
  const fullUrl = changeToFullUrl(req.body.longURL);
  const shortUrl = generateRandomString();
  urlDatabase[shortUrl] = {
    longURL: fullUrl,
    userID: req.session.user_id,
    dateCreated: moment().format("MMM Do YY"),
    clicks: 0
  };
  res.redirect(303, `urls/${shortUrl}`);
  return;
});

router.get("/new", (req, res) => {
  let templateVars = {
    user_id: req.session.user_id,
    email: users[req.session.user_id].email
  };
  res.render("urls_new", templateVars);
});

router.get("/:shortURL", (req, res) => {
  const userUrls = filterUrl(req.session.user_id, urlDatabase);
  if (!urlDatabase.hasOwnProperty(req.params.shortURL)) {
    res.redirect("/error/pageNotFound");
    return;
  }
  if (!userUrls.hasOwnProperty(req.params.shortURL)) {
    res.redirect("/error/accessFailed");
    return;
  }
  const templateVars = {
    shortURL: req.params.shortURL,
    longURL: urlDatabase[req.params.shortURL].longURL,
    dateCreated: urlDatabase[req.params.shortURL].dateCreated,
    user_id: req.session.user_id,
    email: req.session.email
  };
  res.render("urls_show", templateVars);
});

router.post("/:shortURL/edit", (req, res) => {
  if (!urlDatabase.hasOwnProperty(req.params.shortURL)) {
    res.redirect("/error/pageNotFound");
    return;
  }
  const userUrls = filterUrl(req.session.user_id, urlDatabase);
  if (!userUrls.hasOwnProperty(req.params.shortURL)) {
    res.redirect("/error/accessFailed");
  }
  urlDatabase[req.params.shortURL].longURL = changeToFullUrl(req.body.longURL);
  res.redirect("/urls");
});

router.post("/:shortURL/delete", (req, res) => {
  if (!urlDatabase.hasOwnProperty(req.params.shortURL)) {
    res.redirect("/error/pageNotFound");
    return;
  }
  const userUrls = filterUrl(req.session.user_id, urlDatabase);
  if (!userUrls.hasOwnProperty(req.params.shortURL)) {
    res.redirect("/error/accessFailed");
  }
  delete urlDatabase[req.params.shortURL];
  res.redirect("/urls");
});

module.exports = router;
