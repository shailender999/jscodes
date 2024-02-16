// Write a polyfill for "lastIndexOf" function in Javascript 

function arrayLastIndexOf(search, fromIndex = this.length - 1) {
    let arr = this;
    if(arr.length === 0) {
        return -1;
    }
    let index = fromIndex >= 0 ? Math.min(fromIndex, arr.length - 1) : Math.max(fromIndex + arr.length, 0);
    console.log("index",index, fromIndex);
    if(index >= arr.length) {
        index = arr.length - 1;
    }
    for(; index >= 0; index--) {
        //console.log("index inside for: ", index);
        if(index in arr && arr[index] === search) {
            return index;
        }
    }
    return -1;
}
Array.prototype.arrayLastIndexOf = arrayLastIndexOf;

// Testing the pollyfill with static array
const arr = [2,3,4,5,3,6]
const arr2 = ["apple", "banana", "grapes", "orange", "banana"];

// With native map method
//console.log(arr.lastIndexOf(3));
console.log(arr2.lastIndexOf("banana", -3));

// With our implemented map method
//console.log(arr.arrayLastIndexOf(3));
console.log(arr2.arrayLastIndexOf("banana", -9));
