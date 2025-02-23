const MyGym = require("../models/gym-model");

export const createGym = (gymData) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const newGym = new MyGym({
                name: gymData.name,
                email: gymData.email,
                phone_number: gymData.phone_number,
                password: gymData.password
            });
            const savedGym = await newGym.save();
            resolve(savedGym);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}

export const gymLogin = (loginData) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const { password, email } = loginData;
            const gym = await MyGym.findOne({ email: loginData.email });
            if (gym && gym.password === password) {
                resolve(gym);
            }
            resolve(false);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}