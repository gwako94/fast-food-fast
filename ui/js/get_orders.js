const history_url = 'https://herokufastfoodapi.herokuapp.com/api/v2/orders'
const orders = document.getElementById('orders')

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
            let tbody = document.createElement("tbody")
            let tr_head = document.createElement("tr")
            let th_id = document.createElement('th')
            let id_text = document.createTextNode("Order ID")
            th_id.appendChild(id_text)
            let th_items = document.createElement('th')
            let item_text = document.createTextNode("Order Items")
            th_items.appendChild(item_text)
            let th_cost = document.createElement('th')
            let cost_text = document.createTextNode("Total Cost")
            th_cost.appendChild(cost_text)
            let th_date = document.createElement('th')
            let date_text = document.createTextNode("Date")
            th_date.appendChild(date_text)
            let th_status = document.createElement('th')
            let status_text = document.createTextNode("Status")
            th_status.appendChild(status_text)
            tr_head.appendChild(th_id)
            tr_head.appendChild(th_items)
            tr_head.appendChild(th_cost)
            tr_head.appendChild(th_date)
            tr_head.appendChild(th_status)
            tbody.appendChild(tr_head)
            data['Orders'].forEach(order => {
                for (var key in order.cart){
                    item = key;
                    quantity = order.cart[key]
                };
            let tr_body = document.createElement("tr")
            let td_id = document.createElement("td")
            let id_text = document.createTextNode(order.id)
            td_id.appendChild(id_text)
            let td_items = document.createElement("td")
            let ul = document.createElement("ul")
            let li = document.createElement("li")
            let li_text = document.createTextNode(quantity+" "+item)
            li.appendChild(li_text)
            ul.appendChild(li)
            td_items.appendChild(ul)
            let td_total = document.createElement("td")
            let total_text = document.createTextNode(order.total)
            td_total.appendChild(total_text)
            let td_date = document.createElement("td")
            let date_text = document.createTextNode(order.created_at)
            td_date.appendChild(date_text)
            let td_status = document.createElement("td")
            let status_text = document.createTextNode(order.status)
            td_status.appendChild(status_text)
            let td_buttons = document.createElement("td")
            let process = document.createElement("button")
            process.setAttribute("id", "process")
            process.setAttribute("class", "list")
            let process_text = document.createTextNode("Process")
            process.appendChild(process_text)
            let cancel = document.createElement("button")
            cancel.setAttribute("id", "cancel")
            cancel.setAttribute("class", "list")
            let cancel_text = document.createTextNode("Cancel")
            cancel.appendChild(cancel_text)
            let complete = document.createElement("button")
            complete.setAttribute("id", "complete")
            complete.setAttribute("class", "list")
            let complete_text = document.createTextNode("Complete")
            complete.appendChild(complete_text)
            td_buttons.appendChild(process)
            td_buttons.appendChild(cancel)
            td_buttons.appendChild(complete)
            tr_body.appendChild(td_id)
            tr_body.appendChild(td_items)
            tr_body.appendChild(td_total)
            tr_body.appendChild(td_date)
            tr_body.appendChild(td_status)
            tr_body.appendChild(td_buttons)
            tbody.appendChild(tr_body)
            orders.appendChild(tbody)
            //     <td>
            //         <button id="accept" class="list"><a href="#">Accept</a></button>
            //         <button id="accept" class="list"><a href="#">Decline</a></button>
            //         <button id="accept" class="list"><a href="#">Complete</a></button>
            //     </td>
            // </tr>`
            });
        }
       
    });
};