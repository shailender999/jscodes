// WAP to convert a regular function to curry function
// f(a,b,c)        =>      f(a)(b)(c)

function curry(func) {
    console.log(func, func.length);
    return function curriedFunction(...args) {
        console.log("line 7 : ", args, args.length);
        if(args.length >= func.length) {
            return func(...args);
        } else {
            return function(...next) {
                console.log("line 12 : ", next);
                return curriedFunction(...args, ...next);
            }
        }
    }
}
function sum(a,b,c) {
    console.log("reached sum function: ", a, b, c);
    return a+b+c;
}

let sumCurry = curry(sum);
sumCurry(2)(3)(4);


