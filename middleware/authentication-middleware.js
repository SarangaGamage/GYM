import { unauthorized, serverError } from '../utils/response/response-handler';
import { jwt_secret } from '../config/config';
import { verify } from 'jsonwebtoken';


export const authenticateRequest = (publicAPI = false) => {
    return (req, res, next) => {
        try {
            const token = req.headers['authorization']?.split(' ')[1];

            if (!token && !publicAPI) {
                return unauthorized(res, 'Token is missing');
            }

            if (publicAPI) {
                return next();
            }

            verify(token, jwt_secret, (err, user) => {
                if (err) {
                    const message = err.name === 'TokenExpiredError' ? 'Token expired!' : 'Unauthorized';
                    return unauthorized(res, message);
                }

                req.user_data = user;
                next();
            });
        } catch (error) {
            return serverError(res);
        }
    };
};

