// Write a polyfill for "reduce" function in Javascript 

function arrayReduce(callback, initialValue) {
    // if callback is not a function, then throw type error
    if(typeof callback !== 'function'){
        throw new TypeError('Callback must be a function');
    }
    let _arr = this;
    // if array length is 0 and initialValue is also not defined, then throw type error
    if(_arr.length === 0 && (initialValue === undefined)) {
        throw new TypeError('Reduce of empty array with no initial Value');
    }
    let output = initialValue;
    for(let i=0; i< _arr.length; i++) {
        if(output !== undefined) {
            output = callback(output, _arr[i], i, _arr);
        } else {
            output = _arr[i];
        }
    }
    // return reduced output.
    // if array is empty, return initialValue if available else undefined
    return output;
}
Array.prototype.arrayReduce = arrayReduce;

// Testing the pollyfill with static array
const arr = [2,3,4,5,6]

// With native reduce method
console.log(arr.reduce((sum, current) => sum + current, 0));

// With our implemented reduce method
console.log(arr.arrayReduce((sum, current) => sum + current, 0));
