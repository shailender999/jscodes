// Write a polyfill for "filter" function in Javascript 

function arrayFilter(callback) {
    if(typeof callback !== 'function'){
        throw new TypeError('Callback must be a function');
    }
    let _arr = this;
    let output = [];
    for(let i=0; i< _arr.length; i++) {
        if(callback.call(undefined, _arr[i], i, _arr)) {
            output.push(_arr[i])
        }
    }
    return output;
}
Array.prototype.arrayFilter = arrayFilter;

// Testing the pollyfill with static array
const arr = [2,3,4,5, -10, 6, -3]

// With native filter method
console.log(arr.filter((ele, index, arr) => ele > 0));

// With our implemented filter method
console.log(arr.arrayFilter((ele, index, arr) => ele < 0));
