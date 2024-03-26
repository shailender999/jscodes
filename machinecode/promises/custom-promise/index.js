/*
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
It can be in one of the three states:

    PENDING, initial state when an operation is in progress
    FULFILLED, define that the operation was successful
    REJECTED, denotes a failure in an operation

Note: A promise is said to be settled when it is either fulfilled or rejected.


const promise =  new Promise((res, rej) => {
    // code logic goes here and you call  resolve(value)
    // or reject(error) to resolve or reject the promise
});

promise.then(res => {
    // tasks to be done on success of promise
}).catch(err => {
    // tasks to be done on failure of promise
}).finally(() => {
    // tasks to be done whether it success or fails
})

*/

const state = {
    PENDING : 'PENDING',
    FULFILLED : 'FULFILLED',
    REJECTED : 'REJECTED'
}

// define a constructor function which takes executor function as an argument
// executor function contains the asynchronous operation that the promise will represent.
function myPromise(executor) {
    this.state = state.PENDING;
    this.value = undefined;
    this.error = undefined;
    this.onResolvedCallbacks = [];
    this.onRejectedCallbacks = [];

    // function to resolve the promise
    function resolve(value) {
        if(this.state === state.PENDING) {
            this.state = state.FULFILLED;
            this.value = value;
            this.onResolvedCallbacks.forEach(callback => callback(value));
        }
    }
    // function to reject the promise
    function reject(error) {
        if(this.state === state.PENDING) {
            this.state = state.REJECTED;
            this.error = error;
            this.onRejectedCallbacks.forEach(callback => callback(error));
        }
    }

    // execute the executor function
    try {
        // executor function takes two arguments: resolve and reject
        executor(resolve.bind(this), reject.bind(this));
    } catch (error) {
        reject(error);
    }
}
// static method of resolve to handle myPromise.resolve() and return a new Promise instance
// so that promise chaining can happen
myPromise.resolve = function (value) {
    return new myPromise((res, rej) => {
        res(value);
    });
}

// static method of reject to handle myPromise.reject() and return a new Promise instance
// so that promise chaining can happen
myPromise.reject = function (value) {
    return new myPromise((res, rej) => {
        rej(value);
    });
}
// add prototype .then() to handle resolved promises
myPromise.prototype.then = function (onFulfilled, onRejected) {
    // .then returns a new Promise instance so that promise chaining can happen.
    return new myPromise((resolve, reject) => {
        const handleCallback = (callback, value, resolve, reject) => {
            try {
                const result = callback(value);
                if (result instanceof myPromise) {
                    result.then(resolve, reject);
                } else {
                    resolve(result);
                }
            } catch (error) {
                reject(error);
            }
        }
        // custom method to handle the onFulfilled method if it is function or not
        // if it is function, we call the handleCallback, else resolve the value.
        const handleFulfilled = (value) => {
            if (typeof onFulfilled === 'function') {
                handleCallback(onFulfilled, value, resolve, reject);
            } else {
                resolve(value);
            }
        }
        // custom method to handle the onRejected method if it is function or not
        // if it is function, we call the handleCallback, else reject the value.
        const handleRejected = (error) => {
            if (typeof onRejected === 'function') {
                handleCallback(onRejected, error, resolve, reject);
            } else {
                reject(error);
            }
        }
        // case when state is fulfilled
        if (this.state === state.FULFILLED) {
            handleFulfilled(this.value);
        }
        // case when state is rejected
        else if (this.state === state.REJECTED) {
            handleRejected(this.error);
        }
            // case when state is pending
            // push the respective callbacks in respective array
        else {
            this.onResolvedCallbacks.push(handleFulfilled);
            this.onRejectedCallbacks.push(handleRejected);
        }


        
    });
};

// add prototype .catch() to handle rejected promises
myPromise.prototype.catch = function(onRejected) {
    return this.then(undefined, onRejected);
}

// add prototype .finally() to execute code regardless of the promise's state
myPromise.prototype.finally = function(onFinally) {
    return this.then(
        value => myPromise.resolve(onFinally()).then(() => value),
        error => myPromise.resolve(onFinally()).then(() => { throw error; })
    );
};

//console.log(myPromise)
const promise = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Data resolved');
  }, 1000);
});
//console.log(promise);
promise.then(data => {
    console.log(data); // Output: Data resolved
});

const p = new myPromise((res, rej) => {
    rej("promise rejected")
});
p.then(res => console.log(res))
    .catch(error => console.log("inside catch: ", error))
    .finally(console.log("operation completed"));

const promise2 = Promise.resolve(3).then(res => console.log(res));
const promise2_ = myPromise.resolve(3).then(res => console.log(res));

const promise3 = Promise.reject(10).then(res => console.log(res)).catch(err => console.log(err));
const promise3_ = myPromise.reject(10).then(res => console.log(res)).catch(err => console.log(err));