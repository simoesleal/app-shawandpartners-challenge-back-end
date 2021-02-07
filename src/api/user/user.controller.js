const LOGGER = require("../../logger").createLogger("USER_CONTROLLER");
const ApiException = require("../../exceptions/ApiException");
const ApiResultData = require("../../models/ApiResultData");
const UserService = require("./user.service");
const { HTTP_OK, HTTP_BAD_REQUEST } = require("../utils/Constants");

class UserController {
  /**
   * @description Get a list of users from github api.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns {ApiResultData}
   * @throws {error}
   */
  async getUsers(req, res, next) {
    LOGGER.info("Entering in method getUsers.");
    try {
      const response = await UserService.getUsers(req.query);
      LOGGER.info(`Successfully answered the getUsers request.`);
      return res
        .status(HTTP_OK)
        .json(new ApiResultData(HTTP_OK, "List of users loaded!", response));
    } catch (error) {
      LOGGER.error(JSON.stringify(error));
      next(
        new ApiException(
          error.httpStatus || HTTP_BAD_REQUEST,
          "List of users not loaded. Details: " + error.message,
          { code: error.code, message: error.message }
        )
      );
    }
  }

  /**
   * @description Search for a github user by his/her login.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns {ApiResultData}
   * @throws {error}
   */
  async getUser(req, res, next) {
    LOGGER.info("Entering in method getUser.");
    try {
      const response = await UserService.getUser(req.params);
      LOGGER.info(`Successfully answered the getUser request.`);
      return res
        .status(HTTP_OK)
        .json(
          new ApiResultData(HTTP_OK, "User searched with success.", response)
        );
    } catch (error) {
      LOGGER.error(JSON.stringify(error));
      next(
        new ApiException(
          error.httpStatus || HTTP_BAD_REQUEST,
          "User not founded. Details: " + error.message,
          { code: error.code, message: error.message }
        )
      );
    }
  }

  /**
   * @description Search for github repositories from an user, filtering by his/her login.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns {ApiResultData}
   * @throws {error}
   */
  async getUserRepos(req, res, next) {
    LOGGER.info("Entering in method getUserRepos.");
    try {
      const response = await UserService.getUserRepos(req.params);
      LOGGER.info(`Successfully answered the getUserRepos request.`);
      return res
        .status(HTTP_OK)
        .json(
          new ApiResultData(
            HTTP_OK,
            "User repositories searched with success.",
            response
          )
        );
    } catch (error) {
      LOGGER.error(JSON.stringify(error));
      next(
        new ApiException(
          error.httpStatus || HTTP_BAD_REQUEST,
          "User repositories not founded. Details: " + error.message,
          { code: error.code, message: error.message }
        )
      );
    }
  }

  /**
   * @description Search for github details of an user, filtering by his/her login.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns {ApiResultData}
   * @throws {error}
   */
  async getUserDetails(req, res, next) {
    LOGGER.info("Entering in method getUserDetails.");
    try {
      const response = await UserService.getUserDetails(req.params);
      LOGGER.info(`Successfully answered the getUserDetails request.`);
      return res
        .status(HTTP_OK)
        .json(
          new ApiResultData(
            HTTP_OK,
            "User details searched with success.",
            response
          )
        );
    } catch (error) {
      LOGGER.error(JSON.stringify(error));
      next(
        new ApiException(
          error.httpStatus || HTTP_BAD_REQUEST,
          "User details not founded. Details: " + error.message,
          { code: error.code, message: error.message }
        )
      );
    }
  }

  /**
   * @description Search for github complete information from an user, filtering by his/her login.
   * @param {*} req
   * @param {*} res
   * @param {*} next
   * @returns {ApiResultData}
   * @throws {error}
   */
  async getCompleteUser(req, res, next) {
    LOGGER.info("Entering in method getCompleteUser.");
    try {
      const response = await UserService.getCompleteUser(req.params);
      LOGGER.info(`Successfully answered the getCompleteUser request.`);
      return res
        .status(HTTP_OK)
        .json(
          new ApiResultData(HTTP_OK, "User searched with success.", response)
        );
    } catch (error) {
      LOGGER.error(JSON.stringify(error));
      next(
        new ApiException(
          error.httpStatus || HTTP_BAD_REQUEST,
          "User not founded. Details: " + error.message,
          { code: error.code, message: error.message }
        )
      );
    }
  }
}

module.exports = new UserController();
