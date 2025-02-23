import Member, { findOne } from '../models/member-model';
import { bcryptService } from '../utils/bcrypt';
import { Logger } from '../utils/logger';


export const memberCreate = (MemberData) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (MemberData.password !== MemberData.confirm_password) {
                resolve(false);
                return;
            }
            const hashedPassword = await bcryptService.hashPassword(MemberData.password);

            const newMember = new Member({
                email: MemberData.email,
                password: hashedPassword
            });
            const savedMember = await newMember.save();
            resolve(savedMember);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}


export const memberLogin = (loginData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const { biometricData, password, email } = loginData;
            if (biometricData) {
                const Member = await findOne({ biometricData: biometricData });
                resolve(Member);
            } else if (password && email) {
                const Member = await findOne({ email: email });
                if (Member && await bcryptService.comparePassword(password, Member.password)) {
                    resolve(Member);
                }
                resolve(false);
            }
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}


export const memberChekin = (memberId, currentDateTime) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const chekin = await Member.findOneAndUpdate({ _id: memberId }, { $set: { chekin: currentDateTime } }, { new: true });
            resolve(chekin);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}

export const memeberChekout = (memberId, currentDateTime) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const chekin = await Member.findOneAndUpdate({ _id: memberId }, { $set: { chekout: currentDateTime } }, { new: true });
            resolve(chekin);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}


export const getActiveMembers = () => { 
    return new Promise(async (resolve, reject) => {
        try {
            const activeMembers = await Member.find({ status : active});
            resolve(activeMembers);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}