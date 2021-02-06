const LOGGER = require("./logger").createLogger("ROOT SERVER");
const Server = require("./server");
const config = require("./config");
const bluebird = require("bluebird");

const PORT = process.env.SHAWANDPARTNERS_CHALLENGE_API_PORT || config.api.port;

global.Promise = bluebird;

Server.listen(PORT, () => {
  LOGGER.info(`Server is running on PORT=${PORT}`);
});
