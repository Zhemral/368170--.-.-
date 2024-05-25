function isArmstrongNumber(number) {
    let sum = 0;
    let temp = number;
    let digits = number.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    
    return sum === number;
}
