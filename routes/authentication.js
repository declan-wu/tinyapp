const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect(303, "/urls");
});

router.post("/logout", (req, res) => {
  res.clearCookie("username");
  res.redirect(303, "/urls");
});

module.exports = router;
