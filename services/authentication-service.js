const { jwtSecret } = require('../config/config');
const jwt = require('jsonwebtoken');
const responseHandler = require('../utils/response/response-handler');
const moment = require('moment');

export const getAccessToken = ({ email, userId }) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!jwtSecret) {
                resolve({ accessToken: null, message: 'No secret key provided!' });
            }
            const token = jwt.sign({ email, userId }, jwtSecret, { algorithm: "HS256", expiresIn: '1D' });

            const decoded = jwt.decode(token);
            const expireAt = moment.unix(decoded.exp).valueOf();
            const accessToken = { token: newToken, expireAt };

            resolve({ accessToken: { accessToken, user }, message: 'Access token generated successfully' });
        } catch (error) {
            reject(error);
        }
    });
}

export const refreshToken = (req, res) => {
    return new Promise((resolve, reject) => {
        try {
            const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

            if (!token) {
                resolve({ refreshToken: null, message: 'No token provided!' });
            }

            jwt.verify(token, jwtSecret, { ignoreExpiration: true }, (err, payload) => {
                if (err) {
                    resolve({ refreshToken: null, message: 'Inavlid Access Token!' });
                } else {
                    const newToken = jwt.sign({ email: payload.email, userId: payload.userId }, jwtSecret, { algorithm: "HS256", expiresIn: '1D' });

                    let expireAt;
                    jwt.verify(newToken, jwtSecret, (err, user) => {
                        // expireAt = moment.unix(user.exp).format('MMMM Do YYYY, h:mm:ss a');
                        expireAt = moment(user.exp).valueOf();
                    });
                    const accessToken = { token: newToken, expireAt };

                    resolve({ refreshToken: accessToken, message: 'Refresh access token generated successfully' });
                }
            });
        } catch (error) {
            reject(responseHandler.internalServerError(res));
        }
    });
}
