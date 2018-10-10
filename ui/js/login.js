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
            token = data.token;
            localStorage.setItem('token', token);
            window.location.href = 'menu.html';
        }
    })
    .catch((err) => {
        console.log(err)
    })
}