// Write a polyfill for "sort" function in Javascript 
/*
    The sort() method of Array instances sorts the elements of an array in place and 
    returns the reference to the same array, now sorted. 
    The default sort order is ascending, built upon converting the elements into strings, 
    then comparing their sequences of UTF-16 code units values.

    To sort the elements in an array without mutating the original array, use toSorted().
*/
function mySort(callback) {
    let arr = this;
    let length = arr.length;
    let output = [];
    for (let i =0 ; i <length-1; i++) {
        if(callback) {
            callback.call(undefined, arr[i], arr[i+1])
        }
    }
}
Array.prototype.arrayFlat = mySort;

// Testing the pollyfill with static array
const arr = [2,3,[[[4]],5], -10, 6, -3]

// With native flat method
console.log(arr.flat());

// With our implemented flat method
console.log(arr.mySort(Infinity));
