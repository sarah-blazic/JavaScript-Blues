const express = require("express");
const Sequelize = require("sequelize");
const app = express();
const port = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("hahaha wow!"));

/* TODO:
1. write config for db connection
2. connect to db with ORM
3. write models
4. server sync

*/

app.listen(port, () => console.log(`Server listening on port ${port}!`));
