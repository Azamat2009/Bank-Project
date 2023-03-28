import axios from 'axios'
import { cardReload } from './ui';
import { getCurrencies, getData } from './HTTP.reuest';
export let form = document.forms.add_wallet
let user = JSON.parse(localStorage.getItem('user'))
let currency = document.querySelector('#symbols')
let symbols = JSON.parse(localStorage.getItem('symbols'))


//////////////////////
if (!user) location.assign('/pages/login.html')
//////////////////////


if(!symbols) {
    getCurrencies()
        .then(res => {
            if(res.status === 200 || res.status === 201) {
                localStorage.setItem('symbols', JSON.stringify(res.data.currencies))
                createOpt(res.data.currencies)       
            }
        })
} else {
    createOpt(symbols)
}

function createOpt(arr) {
    for(let key in arr) {
        let opt = new Option(key, key)
        currency.append(opt)
    }
}

export function postCard() {
    form.onsubmit = (event) => {
        event.preventDefault();

        let card = {
            user_id: user.id
        };

        let fm = new FormData(form);

        fm.forEach((value, key) => {
            card[key] = value;
        });

        if (card.name && card.currency && card.total) {
            axios.post('http://localhost:3000/cards', card)
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        window.location.assign("/pages/wallets.html");
                        getData("/users?cards=" + user.id)
                            .then(data => cardReload(data, cardCont))
                    }
                })
        } else {
            alert("Error");
        }
    }
}

postCard()