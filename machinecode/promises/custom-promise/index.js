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
function myPromise(executor) {
    this.state = state.PENDING;
    this.value = undefined;
    this.error = undefined;
    this.callbacks = [];

    // function to resolve the promise
    this.resolve = function(value) {
        if(this.state === state.PENDING) {
            this.state = state.FULFILLED;
            this.value = value;
            this.callbacks.forEach(callback => callback());
        }
    }

    // function to reject the promise
    this.reject = function(error) {
        if(this.state === state.PENDING) {
            this.state = state.REJECTED;
            this.error = error;
            this.callbacks.forEach(callback => callback());
        }
    }

    // execute the executor function
    try {
        executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (error) {
        this.reject(error);
    }
}

// add prototype .then() to handle resolved promises
myPromise.prototype.then = function(onFulfilled, onRejected) {
    return new myPromise((resolve, reject) => {
        const handleCallback = () => {
            setTimeout(() => {
                try {
                    if(this.state === state.FULFILLED) {
                        const result = onFulfilled ? onFulfilled(this.value) : this.value;
                        resolve(result);
                    } else if(this.state === state.REJECTED) {
                        const result = onRejected ? onRejected(this.error) : this.error;
                        reject(result);
                    }
                } catch (error) {
                    reject(error);
                }
            }, 0);
        };
        if(this.state === state.PENDING) {
            this.callbacks.push(handleCallback)
        } else {
            handleCallback();
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
