const express = require("express");
const indexRouter = require("./routes/index");
const urlsRouter = require("./routes/urls");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const registerRouter = require("./routes/register");
const shareShortUrlRouter = require("./routes/shareShortUrl");
const errorRouter = require("./routes/error");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    name: "session",
    keys: ["rotationahjkhafjsdkhfasfadsf"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

console.log(__dirname);
app.use(express.static(__dirname + "/public"));

app.use("/", indexRouter);
app.use("/u", shareShortUrlRouter);
app.use("/urls", urlsRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/register", registerRouter);
app.use("/error", errorRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
