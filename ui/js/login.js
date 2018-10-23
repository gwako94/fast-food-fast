const url = 'https://herokufastfoodapi.herokuapp.com/api/v2/auth/login'
const register = document.getElementById('login')

register.addEventListener('submit', e => {
    e.preventDefault();
    let name = document.getElementById('username').value;
    let pass = document.getElementById('signin_psw').value;

    let data = {
        username: name,
        password: pass
    };
    login_user(data);
});
const login_user = (login_details) => {
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(login_details)
    })
    .then((res) => {
        status_code = res.status;
        return res.json();
    })
    .then((data) => {
        if (status_code === 200){
            success.innerHTML = data.message;
            success.style.backgroundColor = "#228B22";
            success.style.color = "#fff"
            success.style.padding = "5px";
            token = data.token;
            user = JSON.parse(atob(token.split('.')[1]));
            localStorage.setItem('loggedIn', user['username'])
            localStorage.setItem('token', token);
            if (user['admin']){
                window.location.href = 'manage_order.html';
                
            }
            else{
                window.location.href = 'menu.html';
            }
        }
        if (status_code === 401){
            error.innerHTML = data.message
            error.style.backgroundColor = "#800000";
            error.style.color = "#fff"
            error.style.padding = "5px";
            
        }
    })
    .catch((err) => {
        console.log(err)
    })
}