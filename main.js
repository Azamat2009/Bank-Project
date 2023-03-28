import { getData } from './modules/HTTP.reuest'
import { header } from '/modules/header'
import { cardReload, creatTransactions } from '/modules/ui'
let h1 = document.querySelector('h1')
let cardCont = document.querySelector('.card-container')
let tbody = document.querySelector('tbody')
let wrapper = document.querySelector('.wrapper')
let userGmail = document.createElement('span')

//////////////////////
let user = JSON.parse(localStorage.getItem('user'))
if (!user) location.assign('/pages/login.html')
header()
h1.innerHTML = `Welcome ${user.name} ${user.surname}`
//////////////////////

getData("/cards?user_id=" + user.id)
    .then(data => cardReload(data, cardCont))
/////////

getData("/transactions?user_id=" + user.id)
    .then(res => creatTransactions(res, tbody))




