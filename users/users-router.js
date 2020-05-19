const router = require("express").Router();

const Users = require("./users-model");
const restricted = require("../auth/restricted-middleware");

const { isValid } = require("./users-service");

router.use(restricted);

module.exports = router;
