const express = require("express");
const urlDatabase = require("../data/urlDatabase");
const router = express.Router();

router.get("/:id", (req, res) => {
  if (urlDatabase.hasOwnProperty(req.params.id)) {
    urlDatabase[req.params.id].clicks++;
    res.redirect(urlDatabase[req.params.id].longURL);
    return;
  } else {
    res.redirect("/error/pageNotFound");
    return;
  }
});

module.exports = router;
