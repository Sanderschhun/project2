'use strict';
require('dotenv')
	.config()
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
// var config = require(__dirname + '/../config/config.json')[env];
// console.log(config);
var config = {
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: 'customers_db',
	host: '127.0.0.1',
	dialect: 'mysql'
};