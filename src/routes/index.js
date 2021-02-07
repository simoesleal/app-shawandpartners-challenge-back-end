const router = require("express").Router();
const LOGGER = require("../logger").createLogger("Default");
const ApiHeaderMiddleware = require("../middlewares/ApiHeaderMiddleware");
const ApiException = require("../exceptions/ApiException");

const User = require("../api/user/user.router");

router.get("/", (req, res) => {
  LOGGER.info("Entering in default router");
  return res.json({
    message: "Shaw and Partners Challenge Back-End initialized with success.",
  });
});

/**
 * This function create an Error
 * @route GET /err
 * @group Basic
 * @returns {Error} 500, 400, 404 - Error ocurred
 */
router.get("/err", (req, res, next) => {
  LOGGER.error("Entering in default error router");
  throw new ApiException(400, "The error created for test...", {
    type: "DEFAULT",
  });
});

router.use("/users", ApiHeaderMiddleware.interceptHeaderXAPIID, User);

module.exports = router;
