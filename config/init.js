const mongoose = require('mongoose');
const { db_url } = require('./config-env');
const Logger = require('../utils/logger').default;
const Message = require('../utils/messages').default;

const initializeDB = async (retryCount = 3, retryDelay = 10000) => {
    let currentRetry = 0;

    const attemptConnection = async () => {
        try {
            Logger.logInfo(Message.common.DB_CONNECTING);
            await mongoose.connect(db_url);
            mongoose.Promise = global.Promise;
            Logger.logInfo(Message.common.DB_CONNECTED);
        } catch (error) {
            currentRetry++;
            console.error(`Error connecting to the database (Attempt ${currentRetry}/${retryCount}):`, error.message);

            if (currentRetry < retryCount) {
                console.log(`Retrying connection in ${retryDelay / 1000} seconds...`);
                setTimeout(attemptConnection, retryDelay);
            } else {
                console.error('Max retry attempts reached. Unable to connect to the database.');
                throw error;
            }
        }
    };
    await attemptConnection();
};

module.exports = {
    initializeDB,
    cors: (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        if (req.method === "OPTIONS") {
            res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
            return res.status(200).json({});
        }
        next();
    }
};


