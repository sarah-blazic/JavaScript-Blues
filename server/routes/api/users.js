import {
  login,
  signup,
  logout,
  getData
} from '../../controllers/user';
const router = require("express").Router();
const passport = require("../../config/passport");


  router.post("/login", passport.authenticate("local"), login);

  router.post("/signup", signup);

  router.get("/logout", logout);

  router.get("/user_data", getData);

module.exports = router;