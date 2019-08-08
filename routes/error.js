const express = require("express");
const users = require("../data/users");
const urlDatabase = require("../data/urlDatabase");

const router = express.Router();

router.get("/pleaseLogin", (req, res) => {
  res.render("pleaseLogin");
});

router.get("/accessFailed", (req, res) => {
  res.render("accessFailed");
});

router.get("/pageNotFound", (req, res) => {
  res.render("pageNotFound");
});

router.get("/userExists", (req, res) => {
  res.render("userExists");
});

router.get("/passwordNotMatched", (req, res) => {
  res.render("passwordNotMatched");
});

module.exports = router;
