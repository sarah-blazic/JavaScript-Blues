const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const session = require('express-session');
const sequelize = require('./config/db/connect')
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//middleware
app.use(session({
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./controllers/'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.get('/', (req, res) => res.send('hahaha wow!'));


/* TODO:
1. write config for db connection
2. connect to db with ORM
3. write models
4. server sync
*/

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });