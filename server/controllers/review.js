const db = require("../models");

module.exports = {
  getAllReviews: function (req, res) {
    db.Review.findAll({
      where: {
        id: req.params.productId,
      },
    }).then(function (dbReview) {
      res.json(dbReview);
    });
  },

  getReview: function (req, res) {
    db.Review.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function (dbReview) {
      res.json(dbReview);
    });
  },

  newReview: function (req, res) {
    console.log(req.body);
    db.Review.create({
      title: req.body.title,
      desc: req.body.desc,
      rating: req.body.rating,
      itemId: req.body.itemId,
      orderId: req.body.orderId,
      date: req.body.date,
      customer: req.body.userId
    }).then(function (dbReview) {
      res.json(dbReview);
    });
  },

  deleteReview: function(req, res) {
    db.Review.destroy({
      where: {
        id: req.params.productId
      }
    })
      .then(function(dbReview) {
        res.json(dbReview);
      });
  },
  

  updateReview: function (req, res) {
    db.Review.update(req.body, {
      where: {
        id: req.params.productId,
      },
    }).then(function (dbReview) {
      res.json(dbReview);
    });
  },
};
