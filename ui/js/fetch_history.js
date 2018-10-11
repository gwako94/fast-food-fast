const history_url = 'https://herokufastfoodapi.herokuapp.com/api/v2/users/orders'
const history = document.getElementById('order_history')

window.onload = function getHistory (){
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
            order_history = ""
            data['Orders'].forEach(order => {
                for (var key in order.cart){
                    item = key;
                    quantity = order.cart[key]
                };
                order_history+=`
            <tr>
                <td>${order.id}</td>
                <td>
                    <ul>
                        <li>${quantity} ${item}</li>
                    </ul>
                </td>
                <td>Ksh. ${order.total}</td>
                <td>${order.created_at}</td>
                <td>${order.status}</td>
            </tr>`
            });
        }
        history.innerHTML += order_history
    });
};