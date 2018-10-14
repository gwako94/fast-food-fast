const post_order_url =  'https://herokufastfoodapi.herokuapp.com/api/v2/users/orders'




function place_order() {
    item = localStorage.getItem('clicked')
    order = {}
    order[item] =1
    console.log(order)
    cart = JSON.stringify({"cart": order})
    fetch(post_order_url, {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'access-token': localStorage.getItem('token')
        },
        body: cart
    })
    .then((res) => {
        status_code = res.status
        return res.json()
    })
    .then((data) => {
        if (status_code === 201){
            console.log(data.message)
        } 
    })
    .catch((err) => {
        console.log(err)
    })
}