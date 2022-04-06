module.exports = function (sequelize, DataTypes) {
    const Order = sequelize.define("Order", {
      customer: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      shipping: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          isDecimal: true,
        },
      },
      inventory: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        validate: {
          isInteger: true,
        },
      },
      rating: {
        type: DataTypes.DECIMAL(10,1),
        allowNull: false,
        defaultValue: 0.0,
        validate: {
          isDecimal: true,
        },
      },
      image: {
          type: DataTypes.STRING,
          allowNull: true,
          validate: {
              isUrl: true
          }
      }
    });
    return Order;
  };
  