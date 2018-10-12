const history_url = 'https://herokufastfoodapi.herokuapp.com/api/v2/orders'
const orders = document.getElementById('order_history')

window.onload = function getOrders (){
    fetch(history_url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'access-token': localStorage.getItem('token')
        }

    })
    .then((res) => {
        status_code = res.status;
        return res.json();
    })
    .then((data) =>{
        if (status_code === 200){
            all_orders = ""
            data['Orders'].forEach(order => {
                for (var key in order.cart){
                    item = key;
                    quantity = order.cart[key]
                };
                all_orders+=`
                <tr>
                <td>${order.id}</td>
                <td>
                    <ul>
                        <li>${quantity} ${item}</li>
                    </ul>
                </td>
                <td>${order.total}</td>
                <td>${order.created_at}</td>
                <td>${order.status}</td>
                <td>
                    <button id="accept" class="list"><a href="#">Accept</a></button>
                    <button id="accept" class="list"><a href="#">Decline</a></button>
                    <button id="accept" class="list"><a href="#">Complete</a></button>
                </td>
            </tr>
            <tr>`
            });
        }
        orders.innerHTML += all_orders
    });
};