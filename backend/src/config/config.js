const path = require('path');
require('dotenv').config({path:'../backend/.env'});
console.log(process.env.DB_DIALECT)
module.exports = {
    development: {
        username: process.env.POSTGRESQL_ADDON_USER,
        password: process.env.POSTGRESQL_ADDON_PASSWORD,
        database: process.env.POSTGRESQL_ADDON_DB,
        host: process.env.POSTGRESQL_ADDON_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.POSTGRESQL_ADDON_PORT,
        loggin: true,
        // username: 'postgres',
        // password: 'root',
        // database: 'country_pay',
        // host: '127.0.0.1',
        // dialect: 'postgres',
        // port: '5432',
    },

    test: {
        username: 'postgres',
        password: 'mypassword',
        database: 'mydatabase_test',
        host: '127.0.0.1',
        dialect: 'postgres',
        port: '5432',
        define: {
            underscored: true,
        },
    },
    production: {
        username: 'postgres',
        password: 'mypassword',
        database: 'mydatabase_production',
        host: '127.0.0.1',
        dialect: 'postgres',
        port: '5432',
        define: {
            underscored: true,
        },
    },
};
