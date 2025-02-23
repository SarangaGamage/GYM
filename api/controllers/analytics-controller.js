import { success, frontError, serverError } from '../../utils/response-handler';


exports.getMemberList = async (req, res) => { 
    try {
        const members = await memberService.getMemberList();
        if (members) {
            success(res, members, "Members list fetched successfully!");
        } else {
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}


exports.getAnalyticsData = async (req, res) => { 
    try {
        const analyticsData = await analyticsService.getAnalyticsData();
        if (analyticsData) {
            success(res, analyticsData, "Analytics data fetched successfully!");
        } else {
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}


exports.getRevenueGrowth = async (req, res) => { 
    try {
        const revenueGrowth = await analyticsService.getRevenueGrowth();
        if (revenueGrowth) {
            success(res, revenueGrowth, "Revenue growth fetched successfully!");
        } else {
            frontError(res, "Something went wrong!");
        }
    } catch (error) {
        serverError(res);
    }
}