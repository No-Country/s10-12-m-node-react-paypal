require('dotenv').config();
const app = require('./index');
const { Sequelize } = require('sequelize');
const { development } = require('./config/config');
const sequelize = new Sequelize(development);

sequelize
    .authenticate()
    .then((connection) => {
        console.log('database authenticate');
    })
    .catch((err) => console.log(err));

sequelize
    .sync()
    .then(() => console.log('database synced'))
    .catch((err) => console.log(err));

// metodo listen

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`app running on port ${PORT} 😛`);
});
