const LOGGER = require("../logger").createLogger("API_HEADER_MIDDLEWARE");
const ApiException = require("../exceptions/ApiException");

class ApiHeaderMiddleware {
  /**
   * @description Verify if the requester has the x api description necessary to access the api.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   */
  interceptHeaderXAPIID(req, res, next) {
    LOGGER.info("Entering in method interceptHeaderXAPIID");
    const xApiDst = req.headers["x-api-dst"];
    if (xApiDst && xApiDst === "S&P-CHALLENGE") {
      LOGGER.info("Go to the next middleware or controller method");
      req.applicationID = xApiDst;
      next();
    } else {
      LOGGER.error("Error while get request headers");
      throw new ApiException(401, "Error while get request headerso", {
        code: "MDW-MISSING-PARAMETERS",
        message: "Required parameters not found.",
      });
    }
  }
}

module.exports = new ApiHeaderMiddleware();
