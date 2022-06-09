

let productLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productLocalStorage)
const basket = document.querySelector("#cart__items")
//console.log(basket)
//si panier est vide 
if (productLocalStorage === null) {
    const emptyBasket = `
    <div> Votre panier est vide</div>
    `;
    basket.innerHTML = emptyBasket;
    //console.log("le panier est vide")
} else {
    fetch('http://localhost:3000/api/products')
        .then((response) => response.json())
        .then((kanap) => {
            function findProduct(id) {
                return kanap.find((product) => product._id === id)
            }
            // })
            let basketProducts = [];

            for (let i = 0; i < productLocalStorage.length; i++) {
                let kanap = findProduct(productLocalStorage[i].id)

                let totalPriceArticle = kanap.price * productLocalStorage[i].quantity
                basketProducts = basketProducts + `
        <article class="cart__item" data-id="${productLocalStorage[i].id}" data-color="${productLocalStorage[i].color}">
            <div class="cart__item__img">
                <img src="${productLocalStorage[i].imageUrl}" alt="${productLocalStorage[i].altTxt}">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${productLocalStorage[i].name}</h2>
                    <p>${productLocalStorage[i].color}</p>
                    <p>${totalPriceArticle} €</p>
                </div>
                <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productLocalStorage[i].quantity}">
                    </div>    
                    <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Supprimer</p>
                    </div>
            </div>
        </div>
        </article>
        `;
            }

            basket.innerHTML = basketProducts;
        })

}


/*(productLocalStorage === null) {
    const emptyBasket = `
    <div> Votre panier est vide</div>
    `;
    basket.innerHTML = emptyBasket;
    //console.log("le panier est vide"*/
function upDatePaner(id, newValue, product) {
    let newItems = productLocalStorage.find((product) => product.id === id)
    newItems.quantity = Number(newValue)
    product.quantity = newItems.quantity
    return
}
/*//div setting quantité//
function addSettings(product) {
    let settings = document.createElement("div")
    settings.classList.add("cart__item__content__settings")
    addQuantitySettings(settings, kanap)
    deleteKanap(settings, product)
    return settings
}
function addQuantitySettings(settings, product) {
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
    input.value = product.quantity
    input.addEventListener("input", () => upDatePaner(product.id, input.value, product))
    quantity.appendChild(input)
    settings.appendChild(quantity)

}

function upDatePaner(id, newValue, product) {
    let newItems = productLocalStorage.find((product) => product.id === id)
    newItems.quantity = Number(newValue)
    product.quantity = newItems.quantity
    totalQuantity()
    totalPrice()
    savemodification(kanap)
}
*/


let deleteProduct = document.querySelectorAll(".deleteItem")
console.log(deleteProduct)

for (let a = 0; a < deleteProduct.length; a++) {
    console.log("lss"[a])
    deleteProduct[a].addEventListener("click", (event) => {
        event.preventDefault()
        console.log(event)
    })
    let deleteItemById = productLocalStorage[a].id;
    console.log("deleteItemById")
    console.log(deleteItemById)
}






//formulaire//

//regex
let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$');
let charRegExp = new RegExp("^[a-zA-Zàâäéèêëïîôöùûüç ,.'-]+$");
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



