
const db = require('../models/');
const Products = require('../models/product');

const productsSeedData = [

        {
          name: "Zingo Alpha",
          desc: "Your average heroku italian",
          price: 350,
        },
        {
          name: "Heroku Italian",
          desc: "Your average heroku italian",
          price: 250,
        },
        {
          name: "AWS Edge Machine",
          desc: "Your average heroku italian",
          price: 350,
        },
        {
          name: "Trash",
          desc: "Your average heroku italian",
          price: 350,
        },
        {
          name: "Sarah Blazic",
          desc: "Your average heroku italian",
          price: 250,
        },
        {
          name: "David McNeary",
          desc: "Your average heroku italian",
          price: 350,
        },
        {
          name: "Jarod",
          desc: "Your average heroku italian",
          price: 350,
        },
        {
          name: "ANTON",
          desc: "Your average heroku italian",
          price: 250,
        },
        {
          name: "VERMA",
          desc: "Your average heroku italian",
          price: 350,
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