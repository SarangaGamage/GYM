import { success, frontError, serverError } from '../../utils/response-handler';


exports.addStaff = async (req, res) => { 
    const staffData = req.body;
    try {
        const staff = await staffService.addStaff(staffData);
        if (staff) {
            success(res, staff, "Staff has been added successfully!");
        } else {
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}


exports.staffLogin = async (req, res) => { 
    const loginData = req.body;
    try {
        const staff = await staffService.staffLogin(loginData);
        if (!staff) {
            frontError(res, "Invalid email or password!");
        } else {
            success(res, staff, "Staff has been logged in successfully!");
        }
    } catch (error) {
        serverError(res);
    }
}


exports.editStaff = async (req, res) => { 
    const staffData = req.body;
    try {
        const staff = await staffService.editStaff(staffData);
        if (staff) {
            success(res, staff, "Staff has been edited successfully!");
        } else {
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}