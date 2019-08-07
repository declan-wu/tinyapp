const express = require("express");
const { isRightUser } = require("../helper");
const users = require("../data/users");
const router = express.Router();

router.post("/", (req, res) => {
  let userID = isRightUser(req.body.email, req.body.password);
  if (userID) {
    res.cookie("user_id", userID);
    res.redirect(303, "/urls");
  } else {
    res.redirect(303, "/login"); //suppoed to be an error msg page
  }
});

router.get("/", (req, res) => {
  if (req.cookies.user_id) {
    res.redirect(303, "/urls");
  }
  res.render("login");
});

module.exports = router;
