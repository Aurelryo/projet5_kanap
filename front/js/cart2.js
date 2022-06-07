

let productLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productLocalStorage)
const basket = document.querySelector("#cart__items")
console.log(basket)
//si panier est vide 
if (productLocalStorage === null) {
    const emptyBasket = `
    <div> Votre panier est vide</div>
    `;
    basket.innerHTML = emptyBasket;
    //console.log("le panier est vide")
} else {
    let basketProducts = [];
    for (let i = 0; i < productLocalStorage.length; i++) {
        basketProducts = basketProducts + `
        <article class="cart__item" data-id="${productLocalStorage[i]._id}" data-color="${productLocalStorage[i].color}">
            <div class="cart__item__img">
                <img src="${productLocalStorage[i].imageUrl}" alt="${productLocalStorage[i].altTxt}">
            </div>
            <div class="cart__item__content">
                <div class="cart__item__content__description">
                    <h2>${productLocalStorage[i].name}</h2>
                    <p>${productLocalStorage[i].color}</p>
                    <p>42,00 €</p>
                </div>
                <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                    <p>Qté : </p>
                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
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

}
