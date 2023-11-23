// Write a polyfill for "flat" function in Javascript 

function arrayFlat(depth = 1) {
    let _arr = this;
    let output = [];
    // if depth is >0, do the flatting else return the entire array as depth = 0 which means no flatting is required
    if(depth > 0) {
        output = _arr.reduce((acc, val) => {
            // if element is array, call the flat method recursively with depth - 1, and append the result in output in array
            if(Array.isArray(val)) {
                acc = [...acc, ...val.arrayFlat(depth - 1)];
            } 
            // if element is not an array, directly append the element in output array 
            else {
                acc = [...acc, val]
            }
            return acc;
        }, []);
    } else {
        output = _arr;
    }
    // return flattened array
    return output;
}
Array.prototype.arrayFlat = arrayFlat;

// Testing the pollyfill with static array
const arr = [2,3,[[[4]],5], -10, 6, -3]

// With native flat method
console.log(arr.flat());

// With our implemented flat method
console.log(arr.arrayFlat(Infinity));
