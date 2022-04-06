const db = require("../models");
const passport = require("../../config/passport");

module.exports = (app) => {
  app.post("/api/login", passport.authenticate("local"), controller.login);

  app.post("/api/signup", controller.signup);

  app.get("/logout", controller.logout);

  app.get("/api/user_data", controller.getData);
};
