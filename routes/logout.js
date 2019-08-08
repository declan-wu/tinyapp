const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  req.session = null;
  res.redirect(303, "/urls");
});

module.exports = router;
