import { success, frontError, serverError } from '../../utils/response-handler';
import { loginValidation, registerValidation } from '../../middleware/validation-middleware';
import { rateLimit } from '../../middleware/rate-limit-middleware';
import { userService } from '../../services/member-service'

exports.memberRegistration = async (req, res) => {
    const userData = req.body;
    const { error } = registerValidation.validate(userData);
    if (error) {
        frontError(res, error.details[0].message);
    }
    try {
        const createdUser = await userService.memberCreate(userData);

        if (createdUser !== null) {
            success(res, createdUser, "User has been created successfully!");
        } else if (!createdUser) {
            frontError(res, "Password and confirm password does not match!");
        } else {
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}

exports.memberLogin = async (req, res, next) => {
    const userLoginData = req.body;
    const { error } = loginValidation.validate(userLoginData);
    if (error) {
        frontError(res, error.details[0].message);
    }

    if(rateLimit.limitUnauthorizedLoginAttempts(req, res, next)){
        
    }
    try {
        const loginUser = await userService.memberLogin(userLoginData);
        if (!loginUser) {
            forbidden(res);
        } else {
            success(res, loginUser, "User has been logged successfully!");
        }

    } catch (error) {
        serverError(res);
    }
}


exports.memberChekin = async (req, res, next ) =>{
    const memberId = req.body.memberId;
    const currentDateTime = new Date();
    if(req.body.chekin){
        try {
            const chekin = await userService.memberChekin(memberId, currentDateTime);
            if(chekin){
                success(res, chekin, "User has been checked in successfully!");
            }else{
                frontError(res, "Something went wrong!");
            }
        } catch (error) {
            serverError(res);
        }
    } else {
        try {
            const chekout = await userService.memberChekout(memberId, currentDateTime);
            if(chekout){
                success(res, chekout, "User has been checked out successfully!");
            }else{
                frontError(res, "Something went wrong!");
            }
        } catch (error) {
            serverError(res);
        }
    }
}

exports.payment = async (req, res) => { 
    const MemberData = req.body;
    try {
        const payment = await userService.addPayment(MemberData);
        if(payment){
            success(res, payment, "Payment has been added successfully!");
        }else{
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}


exports.getActiveMembers = async (req, res) => { 
    try {
        const activeMembers = await userService.getActiveMembers();
        if(activeMembers){
            success(res, activeMembers, "Active members fetched successfully!");
        }else{
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}