const url = 'https://herokufastfoodapi.herokuapp.com/api/v2/auth/register'
const register = document.getElementById('reg')
const success = document.getElementById('success')
const error = document.getElementById('error')

register.addEventListener('submit', e => {
    e.preventDefault();
    let name = document.getElementById('username').value;
    let mail = document.getElementById('email').value;
    let pass = document.getElementById('psw').value;
    let c_pass = document.getElementById('confirm-password').value;

    if (pass != c_pass){
        error.innerHTML = 'Password does not match!'
        return
    }

    let data = {
        username: name,
        email: mail,
        password: pass,
        confirm: c_pass
    };
    register_user(data);
});

const register_user = (user_details) => {
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user_details)
    })
    .then((res) => {
        status_code = res.status;
        return res.json();
    })
    .then((data) => {
        if (status_code === 201){
            success.innerHTML = data.message;
            success.style.backgroundColor = "#228B22";
            success.style.padding = "5px";
            window.setTimeout(() => window.location.href = 'signin.html', 3000);
        }
        if (status_code === 409){
            error.innerHTML = data.message;
            error.style.backgroundColor = "#800000";
            error.style.padding = "5px";
        }
        if (status_code === 400){
            error.innerHTML = data.message;
            error.style.backgroundColor = "#800000";
            error.style.padding = "5px";
        }
    })
    .catch((err) => {
            console.log(err)
    });
};

