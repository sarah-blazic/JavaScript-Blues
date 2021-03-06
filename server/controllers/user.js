const db = require("../models");

module.exports = {

    login: (req, res) => {
        res.json("/dashboard");
    },

    signup: (req, res) => {
        db.User.create({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
        })
          .then(() => {
            res.redirect(307, "/api/login");
          })
          .catch((err) => {
            console.log(err);
            res.json(err);
            // res.status(422).json(err.errors[0].message);
          });
      },

      logout: (req, res) => {
        req.logout();
        res.redirect("/");
      },

      getData: (req, res) => {
        if (!req.user) {
          res.json({});
        } else {
          res.json({
            email: req.user.email,
            id: req.user.id,
          });
        }
      }

};