export function cardReload(arr, place) {
    place.innerHTML = ""

    if (arr.length === 0) {
        place.innerHTML = 'Кошелек пуст!'
        return
    }

    for (let item of arr) {
        place.innerHTML += `
            <div class="card-item" id="${item.id}" >
                <h2>${item.name}</h2>
                <h3>${item.total}</h3>
                <span>${item.currency}</span>
            </div>
        `
    }

}


export function creatTransactions(arr, tbody) {
    tbody.innerHTML = ""

    for (let item of arr) {
        let tr = document.createElement('tr')
        let idTd = document.createElement('td')
        let cardTd = document.createElement('td')
        let categoryTd = document.createElement('td')
        let priceTd = document.createElement('td')
        let whenTd = document.createElement('td')

        idTd.innerHTML = arr.indexOf(item) + 1
        cardTd.innerHTML = item.card_name
        categoryTd.innerHTML = item.category
        priceTd.innerHTML = item.total
        whenTd.innerHTML = item.data

        tbody.append(tr)
        tr.append(idTd, cardTd, categoryTd, priceTd, whenTd)
    }
}