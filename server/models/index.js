const Sequelize = require("sequelize");
const sequelize = require("../config/db/connect");

const Order = require("./order.js")(sequelize, Sequelize);
const Product = require("./product.js")(sequelize, Sequelize);
//const Review = require("./review.js")(sequelize, Sequelize);
const User = require("./user.js")(sequelize, Sequelize);

let instance = {};

instance.Order = Order;
instance.Product = Product;
//instance.review = Review;
instance.User = User;

Order.belongsTo(User, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  as: "orders",
});

Product.belongsToMany(Order, {
    through: "Line"
});

/*Order.hasMany(Product, {
  foreignKey: {
    name: "productId",
  },
  as: "products",
});*/

// Future development: reviews feature
/*
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
    },
    as: "products"
  })

User.hasMany(Review, {
    foreignKey: {
      name: 'userId',
      allowNull: false
    },
    as: 'reviews'
  });
  */
User.hasMany(Order, {
  foreignKey: {
    name: "userId",
    allowNull: false,
  },
  as: "orders",
});

instance.sequelize = sequelize;
instance.Sequelize = Sequelize;

module.exports = instance;
