const menu_url = 'https://herokufastfoodapi.herokuapp.com/api/v2/menu'
const menu = document.getElementById('add_menu')
const success = document.getElementById('success')
const error = document.getElementById('error')
const mycontent = document.getElementById('mycontent')

window.onload = function getMenu(){
    fetch(menu_url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        }

    })
    .then((res) => {
        status_code = res.status;
        return res.json();
    })
    .then((data) => {
        if (status_code === 200){
            data['Menu'].forEach(menu => {
            let div = document.createElement('div')
            div.setAttribute('class', "item")
            let image = document.createElement('img')
            image.setAttribute('src', "images/" + menu.image_url)
            div.appendChild(image)
            let desc_div = document.createElement('div')
            desc_div.setAttribute('class', "description")
            div.appendChild(desc_div)
            let h3 = document.createElement('h3')
            h3.setAttribute('id', "item_name")
            h3.setAttribute('value', menu.item_name)
            let h3_text = document.createTextNode(menu.item_name)
            h3.appendChild(h3_text)
            desc_div.appendChild(h3)
            let edit_button = document.createElement('button')
            edit_button.setAttribute('type', "submit")
            edit_button.setAttribute('id', "edit")
            let edit_text = document.createTextNode('Edit')
            edit_button.appendChild(edit_text)
            let del_button = document.createElement('button')
            del_button.setAttribute('type', "submit")
            del_button.setAttribute('id', "delete")
            del_button.setAttribute("value", menu.id)
            let del_text = document.createTextNode('Delete')
            del_button.appendChild(del_text)
            div.appendChild(edit_button)
            div.appendChild(del_button)
            del_button.addEventListener("click", function del(){
                localStorage.setItem('menu_id', this.value);
            })
            del_button.addEventListener("click", delete_menu)
            let span = document.createElement('span')
            let span_text = document.createTextNode('Ksh. '+ menu.price)
            span.appendChild(span_text)
            div.appendChild(span)
            mycontent.appendChild(div)
            });
      
        }

    })

}



menu.addEventListener('submit', e => {
    e.preventDefault();
    let item_name = document.getElementById('item_name').value;
    let image = document.getElementById('image_url').value;
    let price = document.getElementById('price').value;

    let menu_data = {
        item_name: item_name,
        image_url: image,
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
            success.style.backgroundColor = "#228B22";
            success.style.color = "#fff"
            success.style.padding = "5px";
            window.setTimeout(() => window.location.href = 'add_menu.html', 3000);
        }
        if (status_code === 409){
            error.innerHTML = data.message;
            error.style.backgroundColor = "#800000";
            error.style.color = "#fff"
            error.style.padding = "5px";
            
        }
        if (status_code === 400){
            error.innerHTML = data.message;
            error.style.backgroundColor = "#800000";
            error.style.color = "#fff"
            error.style.padding = "5px";
            
        }
    })
    .catch((err) => {
            console.log(err)
    });
};
