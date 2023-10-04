const express = require("express");
const {
    getDataFromFile,
    appendDataToFile,
    writeDataToFile,
    deleteFile
} = require("../controllers/FileController");

const router = express.Router();

router.route("/").get(getDataFromFile).put(appendDataToFile).delete(deleteFile)
router.route('/write').post(writeDataToFile)


module.exports = router;