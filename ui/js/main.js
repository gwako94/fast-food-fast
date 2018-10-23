const admin = document.getElementById("admin")
const login = document.getElementById("login")
const logout = document.getElementById("sign-out")
function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
function signout() {
    localStorage.clear();
    window.location = "index.html";
}

token = localStorage.getItem("token")
if (!token){
    admin.style.display = "none";
    logout.style.display = "none";
}
let user_log = JSON.parse(atob(token.split('.')[1]));
if (user_log['admin']){
    admin.innerHTML = "Admin";
                
}
else {
    admin.style.display = "none";
}

let loggedIn = localStorage.getItem('loggedIn')
if (loggedIn !== null){
    login.style.display = "none";

}

