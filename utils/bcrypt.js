import { hash as _hash, compare } from 'bcrypt';


export const hashPassword = () => {
    return new Promise((resolve, reject) => {
        try {
            const saltRounds = 10;
            _hash(password, saltRounds, (err, hash) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hash);
                }
            });
        } catch (err) {
            reject(err);
        }
    });
}

export const comparePassword = () => {
    new Promise((resolve, reject) => {
        try {
            compare(userInputPassword, storedHashedPassword, (err, result) => {
                if (err) {
                    reject(err);
                }
                if (result) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        } catch (err) {
            reject(err);
        }
    });
}


export default bcryptService;