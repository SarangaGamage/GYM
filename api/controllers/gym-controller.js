import { success, frontError, serverError } from '../../utils/response-handler';


exports.createGym = async (req, res) => {
    const gymData = req.body;
    try {
        const createdGym = await gymService.createGym(gymData);
        if (createdGym) {
            success(res, createdGym, "Gym has been created successfully!");
        } else {
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}


exports.gymLogin = async (req, res) => { 
    const loginData = req.body;
    try {
        const gym = await gymService.gymLogin(loginData);
        if (!gym) {
            frontError(res, "Invalid email or password!");
        } else {
            success(res, gym, "Gym has been logged in successfully!");
        }
    } catch (error) {
        serverError(res);
    }
}