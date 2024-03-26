// promise constructor with resolve function

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
})

promise1.then((res) => console.log("inside then", res), err => console.log("inside onRejected then", err))
    .catch(err => console.log("inside catch", err));

// promise constructor with reject function

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected again");
    }, 2000);
})

promise2.then((res) => console.log("inside then", res), err => console.log("inside onRejected then", err))
    .catch(err => console.log("inside catch", err));