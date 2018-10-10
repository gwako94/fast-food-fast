const url = 'https://herokufastfoodapi.herokuapp.com/api/v2/menu'
const content = document.getElementById('main-menu')

window.onload = function getMenu (){
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
            output = ''
            data['Menu'].forEach(menu => {
            output += `
            <div class="item">
                <img src="images/${menu.image_url}">
                  <div class="description">
                    <h3>${menu.item_name}</h3>
                </div>
                <button type=submit id="order">Order</button>
                <span>Ksh. ${menu.price}</span>
            </div>
            `  
            });
      
        }
        content.innerHTML = output
    })

}
