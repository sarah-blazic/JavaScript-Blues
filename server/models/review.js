module.exports = function (sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
      customer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        }
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
        }
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        }
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        }
      },
      desc: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1],
        }
      },
      orderId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
              len: [1]
          }
      }
    });

    Review.associate(models => {
      Review.belongsTo(models.User, {
        foreignKey: {
          name: 'userId',
          allowNull: false
        },
        as: "reviews"
      })
    });

    Review.associate(models => {
      Review.belongsTo(models.Product, {
        foreignKey: {
          name: 'productId',
          allowNull: false
        },
        as: "products"
      })
    });

    return Review
  };
  