const info = require("../controllers/info.controller.js");

let router = require("express").Router();

router.post("/infos/", info.create);
router.get("/infos/", info.findAll);

module.exports = router;
