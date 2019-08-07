const express = require("express");
const { allUsers, addUser } = require("../data/users");
const { generateRandomString } = require("../helper");

const router = express.Router();

router.post("/", (req, res) => {
  const userID = generateRandomString();
  const newUser = {
    id: userID,
    email: req.body.email,
    password: req.body.password
  };
  // allUsers().userID = newUser;
  addUser(userID, newUser);
  res.cookie("user_id", userID);
  res.redirect(303, "/urls");
});

router.get("/", (req, res) => {
  res.render("register");
});

module.exports = router;

// curl --data "email=aaa@gmail.com&password=aaa" http://localhost:8080/register
