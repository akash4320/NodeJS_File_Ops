const express = require("express");
const {
    getDataFromFile,
} = require("../controllers/FileController");

const router = express.Router();

router.route("/").get(getDataFromFile);


module.exports = router;