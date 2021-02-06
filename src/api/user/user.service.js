const LOGGER = require("../../logger").createLogger("USER_SERVICE");

class UserService {
  /**
   * @description Get a list of users from github api.
   * @returns {array} dbResponse
   */
  async getUsers({ since = 0, per_page = 10 }) {
    LOGGER.info("Entering in method getUsers.");
    try {
      LOGGER.info("Returning response from method getUsers.");
      return "getUsers";
    } catch (error) {
      LOGGER.error(
        `Error while getting the list of states. Message: ${error.message}.`
      );
      throw error;
    }
  }

  /**
   * @description Search for a github user by his/her login.
   * @param {string} username
   * @returns {json} dbResponse
   */
  async getUser({ username }) {
    LOGGER.info(
      `Entering in method getUser, with parameters - login/username: [${username}].`
    );
    try {
      LOGGER.info("Returning response from method getUser.");
      return "getUser";
    } catch (error) {
      LOGGER.error(
        `Error on service, while getting the user. Message: ${error.message}`
      );
      throw error;
    }
  }

  /**
   * @description Search for github repositories from an user, filtering by his/her login.
   * @param {string} username
   * @returns {json} dbResponse
   */
  async getUserRepos({ username }) {
    LOGGER.info(
      `Entering in methods getUserRepos, with parameters - login/username: [${username}].`
    );
    try {
      LOGGER.info("Returning response from method getUserRepos.");
      return "getUserRepos";
    } catch (error) {
      LOGGER.error(
        `Error on service, while getting the user repositories. Message: ${error.message}`
      );
      throw error;
    }
  }

  /**
   * @description Search for github details of an user, filtering by his/her login.
   * @param {string} username
   * @returns {json} dbResponse
   */
  async getUserDetails({ username }) {
    LOGGER.info(
      `Entering in methods getUserDetails, with parameters - login/username: [${username}].`
    );
    try {
      LOGGER.info("Returning response from method getUserDetails.");
      return "getUserDetails";
    } catch (error) {
      LOGGER.error(
        `Error on service, while getting the user details. Message: ${error.message}`
      );
      throw error;
    }
  }

  /**
   * @description Search for github complete information from an user, filtering by his/her login.
   * @param {string} username
   * @returns {json} dbResponse
   */
  async getCompleteUser({ username }) {
    LOGGER.info(
      `Entering in methods getCompleteUser, with parameters - login/username: [${username}].`
    );
    try {
      LOGGER.info("Returning response from method getCompleteUser.");
      return "getCompleteUser";
    } catch (error) {
      LOGGER.error(
        `Error on service, while getting the user completed information. Message: ${error.message}`
      );
      throw error;
    }
  }
}

module.exports = new UserService();
