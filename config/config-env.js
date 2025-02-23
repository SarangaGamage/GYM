const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  api_version: process.env.API_VERSION,
  jwt_secret: process.env.JWT_SECRET
};

