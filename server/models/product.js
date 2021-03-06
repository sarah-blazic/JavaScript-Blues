module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      }
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    /* Future development: inventory control
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isInteger: true,
      }
    },*/
    /* Future development: customer ratings
    rating: {
      type: DataTypes.DECIMAL(10,1),
      allowNull: false,
      defaultValue: 0.0,
      validate: {
        isDecimal: true,
      }
    },*/
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true
        }
    }
  });
  
  return Product;
};
