function currying(fn, ...args) {
    console.log(fn, fn.length);
    console.log(args);
    return (..._arg) => {
        console.log("_arg values", _arg);
        return fn(...args, ..._arg);
    }
}

function sum(a,b,c) {
    return a + b + c
}
let add = currying(sum,10);
add(20,90);