const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.session.user_id) {
    res.redirect(303, "/urls");
    return;
  } else {
    res.redirect(303, "/login");
    return;
  }
});

module.exports = router;
