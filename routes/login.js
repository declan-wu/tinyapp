const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.cookie("username", req.body.username);
  res.redirect(303, "/urls");
});

router.get("/", (req, res) => {
  res.render("login");
});

module.exports = router;
