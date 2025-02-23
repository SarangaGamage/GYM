const Member = require('../models/member-model');

export const getMemberList = async () => { 
    return new Promise(async (resolve, reject) => {
        try {
            const members = await Member.find();
            resolve(members);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}


export const getAnalyticsData = async () => {
    try {
        const members = await Member.find();
        const totalMembers = members.length;

        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;
        const currentYear = currentDate.getFullYear();

        const revenue = await calculateRevenue(currentMonth, currentYear);
        const pendingPayments = await calculatePendingPayments();

        return {
            totalMembers,
            revenue,
            pendingPayments
        };
    } catch (error) {
        Logger.logError(error);
        throw error;
    }
}

const calculateRevenue = async (month, year) => {
    try {
        const payments = await Payment.find({ month, year });
        const revenue = payments.reduce((total, payment) => total + payment.amount, 0);
        return revenue;
    } catch (error) {
        Logger.logError(error);
        throw error;
    }
}


const getRevenueGrowth = async () => {
    try {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const previousYear = currentYear - 1;

        const currentYearRevenue = await calculateYearlyRevenue(currentYear);
        const previousYearRevenue = await calculateYearlyRevenue(previousYear);

        const revenueGrowth = ((currentYearRevenue - previousYearRevenue) / previousYearRevenue) * 100;
        return revenueGrowth;
    } catch (error) {
        Logger.logError(error);
        throw error;
    }
}
