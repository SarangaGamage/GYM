class Logger {
    static logError(error) {
        console.error(`\x1b[31m[Error]: ${error.message}\x1b[0m`);
        if (error.stack) {
            console.error(`[Stack]: ${error.stack}`);
        }

    }

    static logInfo(message) {
        console.info(`[Info]: ${message}`);
    }
}

export default Logger;
