const express = require("express");
const urlsRouter = require("./routes/urls");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

const app = express();
const PORT = 8080;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/urls", urlsRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
