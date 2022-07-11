let cart = []
let productLocalStorage = JSON.parse(localStorage.getItem("product"));
for (let i = 0; i < productLocalStorage.length; i++) {
    displayItem(productLocalStorage[i])
}
console.log(productLocalStorage)


function displayItem(kanap) {
    let article = addArticle(kanap)
    displayArticle(article)
    let div = addImage(kanap)
    article.appendChild(div)

    let cardItemContent = addCardItemContent(kanap)
    article.appendChild(cardItemContent)
    totalQuantity()
    totalPrice()
}


function displayArticle(article) {
    document.querySelector("#cart__items").appendChild(article)
}
//div article//
function addArticle(kanap) {
    let article = document.createElement("article")
    article.classList.add("card__item")
    article.dataset.id = kanap.id
    article.dataset.color = kanap.color
    return article
}
//div image//
function addImage(kanap) {
    let div = document.createElement("div")
    div.classList.add("cart__item__img")

    let image = document.createElement('img')
    image.src = kanap.imageUrl
    image.alt = kanap.altTxt
    div.appendChild(image)
    return div
}


//div cart item content//
function addCardItemContent(kanap) {
    let cartItemContent = document.createElement("div")
    cartItemContent.classList.add("cart__item__content")

    let description = addDescription(kanap)
    let settings = addSettings(kanap)

    cartItemContent.appendChild(description)
    cartItemContent.appendChild(settings)
    return cartItemContent
}

//div setting quantité//
function addSettings(kanap) {
    let settings = document.createElement("div")
    settings.classList.add("cart__item__content__settings")
    addQuantitySettings(settings, kanap)
    deleteKanap(settings, kanap)
    return settings
}

//création du div description//
function addDescription(kanap) {

    let description = document.createElement("div")
    description.classList.add("card__item__content__description")
    let h2 = document.createElement("h2")
    h2.textContent = kanap.name
    let p = document.createElement("p")
    p.textContent = kanap.color
    let p1 = document.createElement("p")
    p1.textContent = kanap.price + " €"
    description.appendChild(h2)
    description.appendChild(p)
    description.appendChild(p1)
    return description
}

//création div quantité//
function addQuantitySettings(settings, kanap) {
    let quantity = document.createElement("div")
    quantity.classList.add("cart__item__content__settings__quantity")
    let p = document.createElement("p")
    p.textContent = "Qté"
    quantity.appendChild(p)

    let input = document.createElement("input")
    input.type = "number"
    input.classList.add("itemQuantity")
    input.name = ("itemquantity")
    input.min = "1"
    input.max = "100"
    input.value = kanap.quantity
    input.addEventListener("input", () => upDatePaner(kanap.id, input.value, kanap))
    quantity.appendChild(input)
    settings.appendChild(quantity)

}




//tottal article panier//
function totalQuantity() {
    let total = 0
    let totalQuantity = document.querySelector("#totalQuantity")
    cart.forEach((kanap) => {
        let totalQuantitys = + kanap.quantity
        total += totalQuantitys
    })
    totalQuantity.textContent = total
}
// prix total panier//

function totalPrice() {
    let total = 0
    let totalPrice = document.querySelector("#totalPrice")
    cart.forEach((kanap) => {
        let totalKanapPrice = kanap.price * kanap.quantity
        total += totalKanapPrice
    })
    totalPrice.textContent = total
}

//modification panier//
function upDatePaner(id, newValue, kanap) {
    let newItems = productLocalStorage.find((kanap) => kanap.id === id)
    newItems.quantity = Number(newValue)
    kanap.quantity = newItems.quantity
    totalQuantity()
    totalPrice()
    savemodification(kanap)
}



//supprimer item//

//création div suppr et du boutton suprr//
function deleteKanap(settings, kanap) {
    let div = document.createElement("div")
    div.classList.add("cart__item__content__settings__delete")
    div.addEventListener("click", () => deleteItem(kanap))

    let p = document.createElement("p")
    p.textContent = "Supprimer"
    div.appendChild(p)
    settings.appendChild(div)
}
//appel fonction suppr//
function deleteItem(kanap) {
    let deleteProduct = cart.find(
        (product) => product.id === kanap.id && product.color === kanap.color
    )
    cart.splice(deleteProduct, 1)
    totalPrice()
    totalQuantity()
    deleteKanapLocalStorage(kanap)
    deleteKanapLocalPage(kanap)
}
//suprr localstorage//
function deleteKanapLocalStorage(kanap) {
    let key = `${kanap.id}-${kanap.color}`
    localStorage.removeItem(key)
}
//sauvegarde des modification dans localStorage//
function savemodification(kanap) {
    let saveAddKanap = JSON.stringify(kanap)
    let key = `${kanap.id}-${kanap.color}`
    localStorage.setItem(key, saveAddKanap)
}
//suppression du div article//
function deleteKanapLocalPage(kanap) {
    let deleteArticle = document.querySelector(
        `article[data-id="${kanap.id}"][data-color="${kanap.color}"]`
    )
    deleteArticle.remove()
}


//formulaire//

//regex
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
let charRegExp = new RegExp("^[a-zA-Z ,.'-]+$");
let addressRegExp = new RegExp("^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)+");

//regex prénom//
firstName.addEventListener('change', function () {
    validFirstName(this);
})
const validFirstName = function (firstName) {
    let firstNameErrorMsg = firstName.nextElementSibling;

    if (charRegExp.test(firstName.value)) {
        firstNameErrorMsg.innerHTML = '';
    } else {
        firstNameErrorMsg.innerHTML = 'Veuillez renseigner un prénom';
    }
};
//regex nom//
lastName.addEventListener('change', function () {
    validLastName(this);
});
const validLastName = function (lastName) {
    let lastNameErrorMsg = lastName.nextElementSibling;

    if (charRegExp.test(lastName.value)) {
        lastNameErrorMsg.innerHTML = '';
    } else {
        lastNameErrorMsg.innerHTML = 'Veuillez renseigner un nom.';
    }
};
//regex adresse//
address.addEventListener('change', function () {
    validAddress(this);
});

const validAddress = function (address) {
    let addressErrorMsg = address.nextElementSibling;

    if (addressRegExp.test(address.value)) {
        addressErrorMsg.innerHTML = '';
    } else {
        addressErrorMsg.innerHTML = 'Veuillez renseigner une adresse avec un numéro de rue';
    }
};
//regex ville//
city.addEventListener('change', function () {
    validCity(this);
});

const validCity = function (city) {
    let cityErrorMsg = city.nextElementSibling;

    if (charRegExp.test(city.value)) {
        cityErrorMsg.innerHTML = '';
    } else {
        cityErrorMsg.innerHTML = 'Veuillez renseigner une ville.';
    }
};
//regex email//
email.addEventListener('change', function () {
    validEmail(this);
});

const validEmail = function (email) {
    let emailErrorMsg = email.nextElementSibling;

    if (emailRegExp.test(email.value)) {
        emailErrorMsg.innerHTML = '';
    } else {
        emailErrorMsg.innerHTML = 'Veuillez renseigner un email.';
    }
};

//validation form et panier local storage//
let submitOrder = document.querySelector("#order")
submitOrder.addEventListener("click", (e) => submitForm(e))



function submitForm(e) {
    e.preventDefault()
    if (cart.length === 0) {
        alert("selectionnez un produit")
        return
    }

    let body = requestForm()
    fetch("http://localhost:3000/api/products/order", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "content-type": "application/json",
        }
    })
        .then((res) => res.json())
        .then((data) => console.log(data.orderId))//

    console.log(form.elements)
    //document.location.href = "confirmation.html";

}

function requestForm() {
    let form = document.querySelector(".cart__order__form")
    let firstName = form.elements.firstName.value
    let lastName = form.elements.lastName.value
    let address = form.elements.address.value
    let city = form.elements.city.value
    let email = form.elements.email.value
    let body = {
        contact: {
            firstName: firstName,
            lastName: lastName,
            address: address,
            city: city,
            email: email
        },
        product: getIdLocal()
    }
    console.log(body)
    return body
}
function getIdLocal() {
    let idOfKanap = localStorage.length
    let ids = []
    for (let i = 0; i < idOfKanap; i++) {
        let key = localStorage.key(i)
        let id = key.split("-")[0]
        console.log(key)
        ids.push(id)
    }
    return ids
}

