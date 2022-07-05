

let productLocalStorage = JSON.parse(localStorage.getItem("product"));
//console.log(productLocalStorage)
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
            quantityModif()
            totalQuantityProduct()
            totalPrice()
            deleteProduct()
        })

}



function quantityModif() {
    let newQauntity = document.querySelectorAll(".itemQuantity")
    //console.log(newQauntity[0].value)
    for (let i = 0; i < newQauntity.length; i++) {
        newQauntity[i].addEventListener("change", () => {
            productLocalStorage[i].quantity = newQauntity[i].value
            //console.log(productLocalStorage[i].quantity)
            localStorage.setItem("product", JSON.stringify(productLocalStorage))
        })
    }
}

function totalQuantityProduct() {
    let total = 0

    for (let i = 0; i < productLocalStorage.length; i++) {
        totalQuantityBasket = + productLocalStorage[i].quantity
        total += totalQuantityBasket

        const quantityHtml = document.querySelector("#totalQuantity")
        quantityHtml.textContent = total
    }
    ///console.log(totalQuantityBasket)

}
//prix total panier//
function totalPrice() {
    let total = 0
    for (let i = 0; i < productLocalStorage.length; i++) {
        let kanap = productLocalStorage[i].id
        console.log(kanap)
        //const totalPrice = document.querySelector("#totalPrice")
        let totalKanapPrice = kanap.price * productLocalStorage[i].quantity
        total += totalKanapPrice
        const totalPricePoducts = document.querySelector("#totalPrice")
        totalPricePoducts.textContent = total
    }
}



//supprimer//
function deleteProduct() {
    let deleteProduct = document.querySelectorAll(".deleteItem")
    console.log(deleteProduct)

    for (let i = 0; i < deleteProduct.length; i++) {
        deleteProduct[i].addEventListener("click", (event) => {
            event.preventDefault()
            console.log(event)

            let deleteItemById = productLocalStorage[i].id;
            console.log("deleteItemById")
            console.log(deleteItemById)

            productLocalStorage = productLocalStorage.filter(element => element.id == deleteItemById)
            console.log(productLocalStorage)
            localStorage.setItem("product", JSON.stringify(productLocalStorage))

        })
    }
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



