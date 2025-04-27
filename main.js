const searchQuery = document.getElementById("search").value;
const xhr = new XMLHttpRequest();
xhr.open("GET", `http://example.com/search?query=${searchQuery}`, true);
xhr.send();

