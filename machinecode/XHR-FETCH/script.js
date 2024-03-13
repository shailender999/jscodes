const makeXhrRequest = async ({method, url, onSuccess, onError, onCatch}) => {
    return new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, false);
        // setting some request headers
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = function() {
            if(xhr.status === 200) {
                const res = JSON.parse(xhr.responseText);
                onSuccess(res, "using XHR");
            } else {
                onError(xhr);
            }
            resolve("XHR Completed");
        }
        xhr.onerror = function() {
            onCatch();
            reject("XHR Failed");
        }
        xhr.send();
    });
}
const makeFetchRequest = async ({method, url, onSuccess, onError, onCatch}) => {
    return fetch(url, {
        method : method,
        headers : {
            "Content-Type" : "application/json"
        }
    }).then(res => res.json())
    .then(res => {
        onSuccess(res, "using Fetch");
        return Promise.resolve("Fetch Completed");
    }).catch(err => {
        onError(err)
    })
}
document.addEventListener("DOMContentLoaded", function() {
    const fetchData = document.getElementById("fetchButton");
    const outputDiv = document.getElementById("output");
    const loading = document.getElementById("loading");
    let postNo = 1;
    let requestInProgress = false;
    fetchData.addEventListener("click", async function() {
        if(!requestInProgress) {
            requestInProgress = true;
            loading.style.visibility = "visible";
            const onSuccess = function(res, from) {
                outputDiv.innerHTML += `<p>${from} : ${res.id} : ${res.title}</p>`;
            }
            const onError = function(xhr) {
                outputDiv.innerHTML += `<p> in XHR : Error: ${xhr.statusText}</p>`;
            }
            const onCatch = function() {
                outputDiv.innerHTML += "<p>in XHR : Some error occurred!! </p>";
            }
            const output = await makeXhrRequest({
                method : "GET",
                url : `https://jsonplaceholder.typicode.com/posts/${postNo}`,
                onSuccess : onSuccess,
                onError : onError,
                onCatch : onCatch
            })
            const fetchOutput = await makeFetchRequest({
                    method : "GET",
                    url : `https://jsonplaceholder.typicode.com/posts/${postNo}`,
                    onSuccess : onSuccess,
                    onError : onError,
                    onCatch : onCatch
            })
            console.log(output, fetchOutput)
            postNo++;
            console.log("Loading data completed for post no: ", postNo)
            loading.style.visibility = "hidden";
            requestInProgress = false;
        }
        
    })
})