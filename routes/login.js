const express = require("express");
const { isRightUser } = require("../helper");
const users = require("../data/users");
const router = express.Router();

router.post("/", (req, res) => {
  let userID = isRightUser(req.body.email, req.body.password, users);
  if (userID) {
    req.session.user_id = userID;
    res.redirect(303, "/urls");
    return;
  } else {
    res.redirect(303, "/error/passwordNotMatched");
    return;
  }
});

router.get("/", (req, res) => {
  if (users[req.session.user_id]) {
    res.redirect(303, "/urls");
    return;
  }
  res.render("login");
});

module.exports = router;
