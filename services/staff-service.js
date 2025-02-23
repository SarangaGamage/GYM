import Staff from '../models/staff';

export const addStaff = (staffData) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const newStaff = new Staff({
                name: staffData.name,
                email: staffData.email,
                phone_number: staffData.phone_number,
                password: staffData.password
            });
            const savedStaff = await newStaff.save();
            resolve(savedStaff);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}


export const staffLogin = (loginData) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const { password, email } = loginData;
            const staff = await Staff.findOne({email: loginData.email});
            if (staff && staff.password === password) {
                resolve(staff);
            }
            resolve(false);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}


export const editStaff = (staffData) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const staff = await Staff.findOneAndUpdate({ _id: staffData._id }, { $set: staffData }, { new: true });
            resolve(staff);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}