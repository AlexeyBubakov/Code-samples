function fakeBin(x) {
    let array = x.split("").map(element => element < 5 ? 0 : 1).join("");
    return array
}
