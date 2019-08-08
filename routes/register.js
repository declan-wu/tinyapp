const express = require("express");
const bcrypt = require("bcrypt");
const users = require("../data/users");
const { generateRandomString, emailExist } = require("../helper");
const router = express.Router();

router.post("/", (req, res) => {
  if (emailExist(req.body.email, users)) {
    res.redirect(303, "/404"); // error emssage user exists
  }
  const userID = generateRandomString();
  const newUser = {
    id: userID,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  };
  users[userID] = newUser;
  req.session.user_id = userID;
  res.redirect(303, "/urls");
});

router.get("/", (req, res) => {
  if (req.session.user_id) {
    res.redirect(303, "/urls");
  }
  res.render("register");
});

module.exports = router;

// curl --data "email=aaa@gmail.com&password=aaa" http://localhost:8080/register
