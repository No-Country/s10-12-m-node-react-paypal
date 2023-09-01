require('dotenv').config();

module.exports = {
    development: {
        // username: process.env.POSTGRESQL_ADDON_USER,
        // password: process.env.POSTGRESQL_ADDON_PASSWORD,
        // database: process.env.POSTGRESQL_ADDON_DB,
        // host: process.env.POSTGRESQL_ADDON_HOST,
        // dialect: process.env.DB_DIALECT,
        // port: 5432,
        // loggin: false,
        username: 'postgres',
        password: 'root',
        database: 'country_pay',
        host: '127.0.0.1',
        dialect: 'postgres',
        port: '5432',
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
