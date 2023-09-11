Find duplicates in array [3,3,5,5,7,7,7].


let arr = [3,3,5,5,7,7,7];
let arrDuplicates = [];
for (let current = 0; current<arr.length; current++) {

if (arr[current] === arr[current+1] ) {
    if (arrDuplicates.includes(arr[current]) === false) {
        
   arrDuplicates.push(arr[current]);
    }
}
}



