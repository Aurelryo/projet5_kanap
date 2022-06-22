

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



let input = document.querySelector("input")
console.log("input")
console.log(input)
input.type = "number"
input.classList.add("itemQuantity")
input.name = ("itemquantity")
input.min = "1"
input.max = "100"
input.value = productLocalStorage.quantity
input.addEventListener("input", () => upDateBasket(product.id, input.value, kanap))


function upDateBasket() {
    let newItems = productLocalStorage.find((product) => product.id === id)
    newItems.quantity = Number(newValue)
    kanap.quantity = newItems.quantity
}


/*function quantityModif() {
    let newQauntity = document.querySelector(".itemQuantity")

    for (let j = 0; j < newQauntity.length; j++) {
        newQauntity[j].addEventListener("change"), (ev) => {
            ev.preventDefault();

            let modifQuantt = productLocalStorage[j].quantity
            let mdfQuat = newQauntity[j].quantity
        }
    }
}*/


//tottal article panier//
function totalQuantity() {
    let total = 0
    let totalQuantity = document.querySelector("#totalQuantity")
    cart.forEach((productLocalStorage) => {
        let totalQuantitys = + productLocalStorage.quantity
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


function savemodification(kanap) {
    let saveAddKanap = JSON.stringify(kanap)
    let key = `${kanap.id}-${kanap.color}`
    localStorage.setItem(key, saveAddKanap)
}

/*function quantityModif() {
    let newQauntity = document.querySelector(".itemQuantity")

    for (let j = 0; j < newQauntity.length; j++) {
        newQauntity[j].addEventListener("change"), (ev) => {
            ev.preventDefault();

            let modifQuantt = productLocalStorage[j].quantity
            let mdfQuat = newQauntity[j].quantity
        }
    }
}*/







let deleteProduct = document.querySelectorAll(".deleteItem")
console.log(deleteProduct)

for (let a = 0; a < deleteProduct.length; a++) {
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



