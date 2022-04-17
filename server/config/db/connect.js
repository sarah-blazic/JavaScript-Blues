const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres"
});

module.exports = sequelize;