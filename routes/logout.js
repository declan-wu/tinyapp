const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.clearCookie("user_id");
  res.redirect(303, "/urls");
});

module.exports = router;
