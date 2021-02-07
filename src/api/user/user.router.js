const router = require("express").Router();
const UserController = require("./user.controller");

router.get("/", UserController.getUsers);

router.get("/:username/repos", UserController.getUserRepos);

router.get("/:username/details", UserController.getUserDetails);

router.get("/:username/complete", UserController.getCompleteUser);

router.get("/:username", UserController.getUser);

module.exports = router;
