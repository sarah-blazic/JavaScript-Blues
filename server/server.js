const express = require("express");
const app = express();
const session = require("express-session");
const path = require("path");
const PORT = process.env.PORT || 8080;
const expsession = require("express-session");
const db = require("./models");
//const SequelizeStore = require("connect-session-sequelize")(session.Store);
const passport = require("./config/passport");

app.use(express.static(path.join(__dirname, "../client/build")));

//middleware
/*app.use(
  expsession({
    secret: "Super secret secret", //change this!!!
    resave: false,
    //saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  })
);*/
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/"));

//app.get("/", (req, res) => res.send("hahaha wow!"));

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
