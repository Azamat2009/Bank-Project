import axios from 'axios'
import { cardReload } from './ui';
import { editData, getData, postData } from './HTTP.reuest';
export let form = document.forms.add_transaction
let user = JSON.parse(localStorage.getItem('user'))
let cards_select = document.querySelector('select')
let cards = []
let card_id 

getData("/cards?user_id=" + user.id)
    .then(data => {
        createOpt(data)
        cards = data
    })

function createOpt(arr) {
    for(let item of arr) {
        let opt = new Option(item.name, item.id)
        cards_select.append(opt)
    }
}

cards_select.onchange = () => {

    cards.forEach(card => {
        if(cards_select.value == card.id) {
            card_id = card
            console.log(card_id);
        }
    })
}

export function postCard() {
    form.onsubmit = (event) => {
        event.preventDefault();
        let date = new Date()
        let month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth() 
        let data = date.getFullYear() + "-" +  month + "-" + date.getDate()

        let transaction = {
            user_id: user.id,
            data
        };

        let fm = new FormData(form);

        fm.forEach((value, key) => {
            transaction[key] = value;
        });

        if(transaction.total > card_id.total) {
            alert('Недостаточно средств!')
            return
        } 

        if (transaction.card_name && transaction.total && transaction.category) {
            postData("/transactions", transaction)
                .then(res => {
                    if(res.status == 200 || res.status == 201) {
                        location.assign('/pages/transactions.html')

                        editData("/cards/" + card_id.id, {
                            ...card_id,
                            total: +card_id.total - transaction.total
                        })
                        .then(res => console.log(res))
                    }
                })
        } else {
            alert("Error");
        }
    }
}

postCard()