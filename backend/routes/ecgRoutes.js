const express = require("express");
const ecgController = require("./../controllers/ecgController");

const router = express.Router();

router.route("/").get(ecgController.getEcg).post(ecgController.createEcg);
router.route("/:x/:y").get(ecgController.getSpecificEcg);

module.exports = router;
