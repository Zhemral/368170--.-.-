function invertCase(string) {
    let invertedString = '';
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char === char.toUpperCase()) {
            invertedString += char.toLowerCase();
        } else {
            invertedString += char.toUpperCase();
        }
    }
    return invertedString;
}
