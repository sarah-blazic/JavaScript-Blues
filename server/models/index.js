"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const sequelize = require("../config/db/connect");
const basename = path.basename(module.filename);

let instance = {};

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    instance[model.name] = model;
  });

Object.keys(instance).forEach((modelName) => {
  if (instance[modelName].associate) {
    instance[modelName].associate(instance);
  }
});

instance.sequelize = sequelize;
instance.Sequelize = Sequelize;

module.exports = instance;
