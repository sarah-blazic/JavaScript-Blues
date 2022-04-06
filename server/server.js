const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 8080;
const session = require("express-session");
const sequelize = require("./models");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("./config/passport");

app.use(express.static(path.join(__dirname, "../client/build")));

//middleware
app.use(
  session({
    secret: "Super secret secret", //change this!!!
    cookie: {},
    resave: true,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/"));

//app.get("/", (req, res) => res.send("hahaha wow!"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
