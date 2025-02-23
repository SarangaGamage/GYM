const express = require('express');
const app = express();
const config = require('./config/init');
const bodyParser = require('body-parser');
const { port , api_version } = require('./config/config-env');
const Message = require('./utils/messages').default;
const Logger = require('./utils/logger').default;

config.initializeDB()
    .then(() => {
        console.log(`${Message.common.SERVER_LISTENING} : ${port}`);

        const apiVersion = api_version || '/api/v1';
            
        // const workflowRoutes = require('./api/routes/workflow-routes');

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        app.use(config.cors);

        app.get('/api', (req, res) => {
            res.send('Hello from the new code!');
        });

        // app.use(`${apiVersion}/workflow`, workflowRoutes);

    })
    .catch((error) => {
        Logger.logError(error);
    });

module.exports = app;