const LOGGER = require("../../logger").createLogger("USER_DATA_SOURCE");
const axios = require("axios");
const { GIT_HUB_API } = require("../utils/ExternalServices");
class UserDataSource {
  /**
   * @description Get a list of users from github api.
   * @number since,
   * @number per_page,
   * @returns {array} data
   */
  async getUsers(since, per_page) {
    LOGGER.info("Entering in method getUsers.");
    try {
      LOGGER.info(
        `Calling the external service: ${GIT_HUB_API}/users?since=${since}&per_page=${per_page}`
      );
      const { data } = await axios.get(
        `${GIT_HUB_API}/users?since=${since}&per_page=${per_page}` /* ,
        {
          headers: {
            Authorization:
              process.env.SHAWANDPARTNERS_CHALLENGE_GITHUB_OAUTH_SECRET,
          },
        } */
      );
      LOGGER.info(`External service respond with success`);
      return data;
    } catch (error) {
      LOGGER.error(
        `Error while getting the list of states. Message: ${error.message}.`
      );
      throw error;
    }
  }

  /**
   * @description Get an user from github api.
   * @string username,
   * @returns {array} data
   */
  async getUser(username) {
    LOGGER.info("Entering in method getUser.");
    try {
      LOGGER.info(
        `Calling the external service: ${GIT_HUB_API}/users/${username}`
      );
      const { data } = await axios.get(
        `${GIT_HUB_API}/users/${username}` /* , {
        headers: {
          Authorization:
            process.env.SHAWANDPARTNERS_CHALLENGE_GITHUB_OAUTH_SECRET,
        },
      } */
      );
      LOGGER.info(`External service respond with success`);
      return data;
    } catch (error) {
      LOGGER.error(
        `Error while getting the user by username. Message: ${error.message}.`
      );
      throw error;
    }
  }

  /**
   * @description Get github repositories of a user from the github API.
   * @string username,
   * @returns {array} data
   */
  async getUserRepos(username) {
    LOGGER.info("Entering in method getUserRepos.");
    try {
      LOGGER.info(
        `Calling the external service: ${GIT_HUB_API}/users/${username}/repos`
      );
      const { data } = await axios.get(
        `${GIT_HUB_API}/users/${username}/repos` /* ,
        {
          headers: {
            Authorization:
              process.env.SHAWANDPARTNERS_CHALLENGE_GITHUB_OAUTH_SECRET,
          },
        } */
      );
      LOGGER.info(`External service respond with success`);
      return data;
    } catch (error) {
      LOGGER.error(
        `Error while getting the user repositories. Message: ${error.message}.`
      );
      throw error;
    }
  }
}

module.exports = new UserDataSource();
