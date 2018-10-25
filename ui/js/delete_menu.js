const del_url = 'https://herokufastfoodapi.herokuapp.com/api/v2/menu/'


function delete_menu() {
    menu_id = localStorage.getItem("menu_id")
    
    
    fetch(del_url + menu_id, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
            'access-token': localStorage.getItem('token')
        }
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