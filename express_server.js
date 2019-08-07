const express = require("express");
const indexRouter = require("./routes/index");
const urlsRouter = require("./routes/urls");
const loginRouter = require("./routes/login");
const logoutRouter = require("./routes/logout");
const registerRouter = require("./routes/register");
const shareShortUrlRouter = require("./routes/shareShortUrl");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/u", shareShortUrlRouter);
app.use("/urls", urlsRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/register", registerRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
