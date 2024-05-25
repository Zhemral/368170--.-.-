function isLuckyTicket(ticketNumber) {
    const length = ticketNumber.length;  
    if (length % 2 !== 0) {
        return false; // Количество цифр должно быть чётным
    }    
    const halfLength = length / 2;
    let sum1 = 0, sum2 = 0;   
    for (let i = 0; i < halfLength; i++) {
        sum1 += parseInt(ticketNumber[i], 10);
    } 
    for (let i = halfLength; i < length; i++) {
        sum2 += parseInt(ticketNumber[i], 10);
    } 
    return sum1 === sum2;
}
// Примеры использования
console.log(isLuckyTicket('385916')); // true
console.log(isLuckyTicket('231002')); // false
console.log(isLuckyTicket('1222'));   // false
console.log(isLuckyTicket('054702')); // true
console.log(isLuckyTicket('00'));     // true
