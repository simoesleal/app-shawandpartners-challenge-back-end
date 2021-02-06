const dotenv = require("dotenv");

const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV === "development" || NODE_ENV === "test") dotenv.config();

const config = {
  api: {
    port: NODE_ENV === "production" ? process.env.API_PORT : 9000,
    upload_directory:
      process.env.SHAWANDPARTNERS_CHALLENGE_UPLOAD_DIRECTORY || "/tmp/",
  },
};

module.exports = config;
