const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  //native: true,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to Heroku DB has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
