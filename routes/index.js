const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.cookies.user_id) {
    res.redirect(303, "/urls");
  } else {
    res.redirect(303, "/login");
  }
});

module.exports = router;
