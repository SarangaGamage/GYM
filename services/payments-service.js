import Member, { findOne } from '../models/member-model';
import Payment from '../models/payment-model';



export const addPayment = (MemberData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newPayment = new Payment({
                member_id: MemberData.member_id,
                month: MemberData.month,
                amount: MemberData.amount,
                payment_date: MemberData.payment_date,
                payment_status: MemberData.payment_status
            });
            const savedPayment = await newPayment.save();
            resolve(savedPayment);
        } catch (error) {
            Logger.logError(error);
            reject(error);
        }
    });
}
