// Call routes
const express = require("express");
const routes = require("./routes");

// import sequelize connection
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;
