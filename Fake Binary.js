// # Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
    let array = x.split("").map(element => element < 5 ? 0 : 1).join("");
    return array
}


