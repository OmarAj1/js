//forEach => an example
// const arr = [1, 2, 3];
// arr.forEach(function(item, index, array) {
//     //code
// })

// function myforEach(callBack) {
//     for (let i = 0; i < array.length; i++) {
//         return callBack(array[i], i, array);
//     }
// }
// Array.prototype.myforEach = myforEach;
// filter 
// Array.prototype.myFilter = function(callback) {
//     let res = [];
//     for (let i = 0; i < this.length; i++) {
//         let isFound = callback(this[i])
//         if (isFound == true) {
//             res.push(this[i]);
//         }
//     }
//     return res;
// }


// console.log(Arr.myFilter(e => e > 6));

// find
// Array.prototype.myFind = function(callback) {
//     let res;
//     for (let i = 0; i < this.length; i++) {
//         let isFound = callback(this[i], i, this)
//         if (isFound == true) {
//             res = this[i]
//             break
//         }
//     }
//     return res;
// }

const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Array.prototype.myReduce = function(callback, accumulator) {
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this)
    }
    return accumulator;
}
let sum = Arr.myReduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);