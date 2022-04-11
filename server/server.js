const express = require("express");
const app = express();
<<<<<<< HEAD
const path = require("path");
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const sequelize = require("./config/db/connect");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//middleware
app.use(
  session({
=======
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 8080;
const expsession = require("express-session");
const sequelize = require("./models");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("./config/passport");

app.use(express.static(path.join(__dirname, "../client/build")));

//middleware
app.use(
  expsession({
>>>>>>> 12b80d0f0a9ea36e747bdd7b47279208a54c72df
    secret: "Super secret secret", //change this!!!
    cookie: {},
    resave: true,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);
<<<<<<< HEAD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.get("/", (req, res) => res.send("hahaha wow!"));
=======
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/"));
>>>>>>> 12b80d0f0a9ea36e747bdd7b47279208a54c72df

//app.get("/", (req, res) => res.send("hahaha wow!"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
