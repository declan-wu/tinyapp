const express = require("express");
const urlDatabase = require("../data/urlDatabase");
const router = express.Router();

router.get("/:id", (req, res) => {
  if (urlDatabase.hasOwnProperty(req.params.id)) {
    res.redirect(urlDatabase[req.params.id]);
  } else {
  }
  res.redirect("/404");
});

module.exports = router;
