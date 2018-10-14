const url = 'https://herokufastfoodapi.herokuapp.com/api/v2/menu'
const content = document.getElementById('main-menu')

window.onload = function getMenu(){
    fetch(url, {
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
            let button = document.createElement('button')
            button.setAttribute('type', "submit")
            button.setAttribute('id', menu.item_name)
            console.log(menu.item_name)
            button.addEventListener('click', function clicked(){
                localStorage.removeItem('clicked')
                localStorage.setItem('clicked', this.id)
            })
            button.addEventListener('click', place_order)
            let order_text = document.createTextNode('Order')
            button.appendChild(order_text)
            div.appendChild(button)
            let span = document.createElement('span')
            let span_text = document.createTextNode('Ksh. '+ menu.price)
            span.appendChild(span_text)
            div.appendChild(span)
            content.appendChild(div)
            });
      
        }

    })

}
