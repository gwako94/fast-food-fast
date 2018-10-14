const menu_url = 'https://herokufastfoodapi.herokuapp.com/api/v2/menu'
const menu = document.getElementById('add_menu')
const success = document.getElementById('success')
const error = document.getElementById('error')

menu.addEventListener('submit', e => {
    e.preventDefault();
    let item_name = document.getElementById('item_name').value;
    let image = document.getElementById('image_url').value;
    let price = document.getElementById('price').value;

    let menu_data = {
        item_name: item_name,
        image_url: image_url,
        price: price
    };
    add_menu(menu_data);
});

const add_menu = (menu_details) => {
    fetch(menu_url, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'access-token': localStorage.getItem('token')
        },
        body: JSON.stringify(menu_details)
    })
    .then((res) => {
        status_code = res.status;
        return res.json();
    })
    .then((data) => {
        if (status_code === 201){
            success.innerHTML = data.message;
            window.setTimeout(() => window.location.href = 'add_menu.html', 3000);
        }
        if (status_code === 409){
            error.innerHTML = data.message;
        }
        if (status_code === 400){
            error.innerHTML = data.message;
        }
    })
    .catch((err) => {
            console.log(err)
    });
};
