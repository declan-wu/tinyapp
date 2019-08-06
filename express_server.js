const express = require("express");
const urlsRouter = require("./routes/urls");
const authenticationRouter = require("./routes/authentication");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 8080;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/urls", urlsRouter);
app.use("/authentication", authenticationRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
