const dataRoutes = require("express").Router();

const { getData } = require("../controllers/data.controller");

dataRoutes.get("/", getData);

module.exports = dataRoutes;
