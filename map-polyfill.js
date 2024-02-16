// Write a polyfill for "map" function in Javascript 

function arrayMap(callback) {
    // if callback is not a function, then throw type error
    if(typeof callback !== 'function'){
        throw new TypeError('Callback must be a function');
    }
    let _arr = this;
    let output = [];

    for(let i=0; i< _arr.length; i++) {
        output.push(callback.call(undefined, _arr[i], i, _arr));
    }
    return output;
}
Array.prototype.arrayMap = arrayMap;

// Testing the pollyfill with static array
const arr = [2,3,4,5,6]

// With native map method
console.log(arr.map((element, index, arr) => element * 2));

// With our implemented map method
console.log(arr.arrayMap((element, index, arr) => element * 2));
