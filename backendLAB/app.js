var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
var databas = require("./database/config");
var passport = require("passport");

//Rutas punto 7
var wordRouter = require("./routers/word");
var authRouter = require("./routers/auth")

//Variables creadas
var userRouter = require("./routers/user");
require("./auth/auth");

var app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(authRouter);

passport.authenticate("jwt", { session: false })
app.use("/user", passport.authenticate("jwt", { session: false }));
app.use("/user",userRouter);
app.use("/word", wordRouter);



module.exports = app;