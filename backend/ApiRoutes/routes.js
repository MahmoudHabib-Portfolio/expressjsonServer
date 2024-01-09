//Init express
const express = require("express");
//Using exppress Router
const router = express.Router();
//Calling API Controllers
const {
    getAll,
    getIndividual,
    AddData,
    UpData,
    RemData
} = require("../Controller/appController.js");

//Getting All data using qpi route
router.route('/').get(getAll).post(AddData);
router.route('/:id').get(getIndividual).put(UpData).delete(RemData);

module.exports = router;