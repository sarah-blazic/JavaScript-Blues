const path = require("path");
const express = require("express");
const session = require("express-session");
require("dotenv").config();

const db = require("./models");
const routes = require("./routes/");
const passport = require("./config/passport");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "../client/build")));

//middleware
app.use(
  session({
    secret: "Super secret secret", //change this!!!
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.sequelize.sync({ force: false, logging: console.log }).then(() => {
  console.log("\n*************************************");
  console.log(`${process.env.DB_NAME} database connected`);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
  console.log("*************************************\n");
});
