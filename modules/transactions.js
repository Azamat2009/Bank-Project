import {header} from '/modules/header'
import {getData} from '/modules/HTTP.reuest'
import {creatTransactions} from '/modules/ui'

let h1 = document.querySelector('h1')
let tbody = document.querySelector('tbody')

//////////////////////
let user = JSON.parse(localStorage.getItem('user'))
if (!user) location.assign('/pages/login.html')
header()
h1.innerHTML = `Welcome ${user.name} ${user.surname}`
//////////////////////

getData("/transactions?user_id=" + user.id)
    .then(res => creatTransactions(res, tbody))