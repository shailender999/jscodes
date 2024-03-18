/*
    Suppose you have a web application where users can search for books by entering keywords. 
    When a user submits a search query, the application sends a request to the Google Books API to fetch relevant books based on the query. 
    Once the data is retrieved, the application processes the results and displays them to the user.
    
    Here's how you can design this system involving promises in JavaScript:
        1. Fetch Data from API: 
            Create a function fetchBooks() that sends a request to the Google Books API and returns a promise with the fetched data.
        2. Process Data: 
            Use .then() to handle the resolved promise and process the fetched data. 
            This may involve filtering or transforming the data based on certain criteria.
        3. Display Results: 
            Once the data is processed, update the user interface to display the search results.
        4. Error Handling: 
            Use .catch() to handle any errors that occur during the fetching or processing of data.
*/

const fetchBooks = async (query = "") =>  {
    const fetchUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
    const res = await fetch(fetchUrl).then(res => res.json()).catch(error => error);
    return res;
}
const appendBooks = (data, outputDiv) => {
    data.items.forEach((item) => {
        outputDiv.innerHTML += `<p>${item.volumeInfo.title}</p>`;
    })
}

document.addEventListener("DOMContentLoaded", function() {
    const inputQuery = document.getElementById("inputQuery");
    const fetchBooksButton = document.getElementById("fetchBooksButton");
    const outputDiv =  document.getElementById("booksList");
    fetchBooksButton.addEventListener("click", function () {
        fetchBooks(inputQuery.value).then(res => appendBooks(res, outputDiv))
        .catch(error => outputDiv.innerHTML = `<p style="color: red">Some Error occurred. Please try after some time!</p>`);
    })
})