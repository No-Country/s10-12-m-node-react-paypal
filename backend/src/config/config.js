require('dotenv').config();

 module.exports = {
     development: {
       "username": "postgres",
       "password": "root",
       "database": "countrypay",
       "host": "127.0.0.1",
       "dialect": "postgres"
     },
     test: {
       "username": "postgres",
       "password": "root",
       "database": "countrypayt",
       "host": "127.0.0.1",
       "dialect": "postgres"
     },
     production: {
       "username": "postgres",
       "password": "root",
       "database": "countrypay",
       "host": "127.0.0.1",
       "dialect": "postgres"
     }
   }

 

 