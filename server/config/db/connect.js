const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to our db
const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'postgres',
      port: process.env.DB_PORT
    });

module.exports = sequelize;