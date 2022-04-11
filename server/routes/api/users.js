const controller = require('../../controllers/user');
const router = require("express").Router();
const passport = require("../../config/passport");


  router.post("/login", passport.authenticate("local"), controller.login);

  router.post("/signup", controller.signup);

  router.get("/logout", controller.logout);

  router.get("/user_data", controller.getData);

module.exports = router;