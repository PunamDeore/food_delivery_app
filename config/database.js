const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'food_delivery_db',
  username: 'postgres',
  password: 'Dipali@1997',
  host: 'localhost',
  port: 5432,
});

module.exports = sequelize;
