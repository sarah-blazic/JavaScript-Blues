const db = require("../models/product");

module.exports = {

  getAllProducts: function(req, res) {
    db.Product.findAll({})
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  },

  getProduct: function(req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  },

  getTaggedProducts: function(req, res) {
    db.Product.findAll({
      where: {
        category: req.params.tag
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  },

  newProduct: function(req, res) {
    console.log(req.body);
    db.Product.create({
      name: req.body.name,
      desc: req.body.desc,
      price: req.body.price,
      inventory: req.body.inventory,
      //tags: req.body.tags,
      image: req.body.imageURL
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  },

  /*
  deleteProduct: function(req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  },
  */

  updateProduct: function(req, res) {
    db.Product.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
      .then(function(dbProduct) {
        res.json(dbProduct);
      });
  }
};
