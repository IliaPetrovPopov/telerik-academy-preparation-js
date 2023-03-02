let input = [
    '23',
    '422',
];
  
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let messages = Number(gets());
let minutes = Number(gets());

let messagesByPlan = 20;
let minutesByPlan = 60;
let bill = 12.00;
let additionalMessagePrice = 0.06;
let additionalMinutePrice = 0.10;

    if((minutes <= 60 && minutes >=0) && (messages <= 20 && messages >= 0))
{
    print(`0 additional messages for 0.00 levas`);
    print(`0 additional minutes for 0.00 levas`);
    print(`0.00 additional taxes`);
    print(`${bill.toFixed(2)} total bill`);
}
    else if((minutes <= 60 && minutes >= 0) && messages > 20)
{

    let exceededMessages = messages - messagesByPlan;
    let exceededMessagesPrice = (exceededMessages * additionalMessagePrice);
    
    let exceededMinutes = minutes - minutesByPlan;
    let exceededMinutesPrice = (exceededMinutes * additionalMinutePrice);

    let taxes = (((exceededMessagesPrice + exceededMinutesPrice) * 20) / 100);

    let totalBill = exceededMessagesPrice + exceededMinutesPrice + taxes + bill;

    print(`${(exceededMessages)} additional messages for ${(exceededMessages * additionalMessagePrice).toFixed(2)} levas`);
    print(`${(exceededMinutes)} additional minutes for ${(exceededMinutes * additionalMinutePrice).toFixed(2)} levas`);
    print(`${taxes.toFixed(2)} additional taxes`);
    print(`${totalBill} total bill`);
}
    else if(minutes > 60 && (messages <= 20 && messages >= 0))
{
    let exceededMessages = messages - messagesByPlan;
    let exceededMessagesPrice = (exceededMessages * additionalMessagePrice);
    
    let exceededMinutes = minutes - minutesByPlan;
    let exceededMinutesPrice = (exceededMinutes * additionalMinutePrice);

    let taxes = (((exceededMessagesPrice + exceededMinutesPrice) * 20) / 100);

    let totalBill = exceededMessagesPrice + exceededMinutesPrice + taxes + bill;

    print(`${(exceededMessages)} additional messages for ${(exceededMessages * additionalMessagePrice).toFixed(2)} levas`);
    print(`${(exceededMinutes)} additional minutes for ${(exceededMinutes * additionalMinutePrice).toFixed(2)} levas`);
    print(`${(taxes.toFixed(2))} additional taxes`);
    print(`${(totalBill.toFixed(2))} total bill`);
}
    else if (minutes > 60 && messages > 20)
{
    let exceededMessages = messages - messagesByPlan;
    let exceededMessagesPrice = (exceededMessages * additionalMessagePrice);
    
    let exceededMinutes = minutes - minutesByPlan;
    let exceededMinutesPrice = (exceededMinutes * additionalMinutePrice);

    let taxes = (((exceededMessagesPrice + exceededMinutesPrice) * 20) / 100);

    let totalBill = exceededMessagesPrice + exceededMinutesPrice + taxes + bill;

    print(`${(exceededMessages)} additional messages for ${(exceededMessages * additionalMessagePrice).toFixed(2)} levas`);
    print(`${(exceededMinutes)} additional minutes for ${(exceededMinutes * additionalMinutePrice).toFixed(2)} levas`);
    print(`${(taxes.toFixed(2))} additional taxes`);
    print(`${(totalBill.toFixed(2))} total bill`);
}