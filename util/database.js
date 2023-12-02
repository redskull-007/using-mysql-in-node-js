const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'abhi@mysql100', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
