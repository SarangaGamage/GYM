import { success, frontError, serverError } from '../../utils/response-handler';

exports.addMemberPlan = async (req, res) => { 
    const planData = req.body;
    try {
        const createdPlan = await memberPlanService.addMemberPlan(planData);
        if (createdPlan) {
            success(res, createdPlan, "Member plan has been created successfully!");
        } else {
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}



exports.getMemberPlan = async (req, res) => { 
    const memberId = req.params.memberId;
    try {
        const memberPlan = await memberPlanService.getMemberPlan(memberId);
        if (memberPlan) {
            success(res, memberPlan, "Member plan fetched successfully!");
        } else {
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}



exports.updateMemberPlan = async (req, res) => { 
    const planData = req.body;
    try {
        const updatedPlan = await memberPlanService.updateMemberPlan(planData);
        if (updatedPlan) {
            success(res, updatedPlan, "Member plan has been updated successfully!");
        } else {
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}


exports.deleteMemberPlan = async (req, res) => { 
    const planId = req.params.planId;
    try {
        const deletedPlan = await memberPlanService.deleteMemberPlan(planId);
        if (deletedPlan) {
            success(res, deletedPlan, "Member plan has been deleted successfully!");
        } else {
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}