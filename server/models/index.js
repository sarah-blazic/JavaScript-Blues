"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = require("../config/db/connect");
const basename = path.basename(module.filename);
const Order = require("./order.js")(sequelize, Sequelize);
const Product = require("./product.js")(sequelize, Sequelize);
const Review = require("./review.js")(sequelize, Sequelize);
const User = require("./user.js")(sequelize, Sequelize);

let instance = {};

instance.order = Order;
instance.product = Product;
instance.review = Review;
instance.user = User;

  Order.belongsTo(User, {
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    as: 'orders'
  });


  Order.hasMany(Product, {
    foreignKey: {
      name: 'productId',
      allowNull: false
    },
    as: 'products'
  });

  Product.belongsTo(Order, {
    foreignKey: {
      name: 'orderId',
      allowNull: false
    },
    as: 'products'
  });

  Product.hasMany(Review, {
    foreignKey: {
      name: 'productId',
      allowNull: false
    },
    as: 'reviews'
  });

  Review.belongsTo(User, {
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    as: "reviews"
  })

  Review.belongsTo(Product, {
    foreignKey: {
      name: 'productId',
      allowNull: false
    },
    as: "products"
  })

  User.hasMany(Order, {
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    as: 'orders'
  });

  User.hasMany(Review, {
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    as: 'reviews'
  });

instance.sequelize = sequelize;
instance.Sequelize = Sequelize;

module.exports = instance;
