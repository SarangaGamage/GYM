const  MemberPlan = require('../models/member-plan-model');


export const addMemberPlan = (memberPlanData) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const newMemberPlan = new MemberPlan({
                member_id: memberPlanData.member_id,
                plan_id: memberPlanData.plan_id,
                start_date: memberPlanData.start_date,
                end_date: memberPlanData.end_date,
                status: memberPlanData.status,
                plan_data: memberPlanData.plan_data
            });
            const savedMemberPlan = await newMemberPlan.save();
            resolve(savedMemberPlan);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}


export const getMemberPlan = (memberId) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const memberPlan = await MemberPlan.findOne({}).populate('plan_id');
            resolve(memberPlan);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }

    }
    );  
}


export const updateMemberPlan = (memberPlanData) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const memberPlan = await MemberPlan.findOneAndUpdate({ _id: memberPlanData._id }, { $set: memberPlanData }, { new: true });
            resolve(memberPlan);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}


export const deleteMemberPlan = (memberPlanId) => { 
    return new Promise(async (resolve, reject) => {
        try {
            const memberPlan = await MemberPlan.findOneAndDelete({ _id: memberPlanId });
            resolve(memberPlan);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}