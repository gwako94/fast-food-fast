const orders_url = "https://herokufastfoodapi.herokuapp.com/api/v2/orders/"


function update_status(){
    order_id = localStorage.getItem('order_id')
    action = localStorage.getItem('action')

    if (action === 'accept'){
        status = "processing"
    }

    if (action === 'decline'){
        status = "cancelled"
    }
    
    if (action === 'complete'){
        status = "completed"
    }
    fetch(orders_url + order_id, {
        method: 'PUT',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'access-token': localStorage.getItem('token')
        },
        body: JSON.stringify({"status": status})
    })
    .then((res) => {
        status_code = res.status
        return res.json()
    })
    .then((data) => {
        if (status_code === 200){
            alert(data.message)
            location.reload()
        }
    })
    .catch((err) => [
        console.log(err)
    ]);
}


