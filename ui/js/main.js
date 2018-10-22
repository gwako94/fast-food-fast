const username = document.getElementById('user')
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
name = localStorage.getItem('user')
username.innerHTML = "Hello, " +name

function signout() {
    localStorage.clear();
    window.location = "index.html";
}
