
const db = require('../models/');
const Products = require('../models/product');

const productsSeedData = [
        {
          name: "Zingo Alpha",
          desc: "Your average heroku italian",
          price: 350,
          inventory: 100
        },
        {
          name: "Heroku Italian",
          desc: "Your average heroku italian",
          price: 250,
        inventory: 100
        },
        {
          name: "AWS Edge Machine",
          desc: "Your average heroku italian",
          price: 350,
        inventory: 100
        },
        {
          name: "Trash",
          desc: "Your average heroku italian",
          price: 350,
        inventory: 100
        },
        {
          name: "Sarah Blazic",
          desc: "Your average heroku italian",
          price: 250,
        inventory: 100
        },
        {
          name: "David McNeary",
          desc: "Your average heroku italian",
          price: 350,
        inventory: 100
        },
        {
          name: "Jarod",
          desc: "Your average heroku italian",
          price: 350,
        inventory: 100
        },
        {
          name: "ANTON",
          desc: "Your average heroku italian",
          price: 250,
        inventory: 100
        },
        {
          name: "VERMA",
          desc: "Your average heroku italian",
          price: 350,
        inventory: 100
        },
    ];

    const seed = () => {
        return Products.bulkCreate(productsSeedData)
        .then( () => { process.exit(); });
    };
seed();

db.sync({force: false})
.then( () => {
    console.log("db synced from seeds");

})