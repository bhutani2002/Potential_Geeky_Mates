const express = require("express");
const { getFormData } = require("../controller/form");
const formRouter = express.Router();

formRouter.post("/getRecomendation", getFormData);

module.exports = { formRouter };
