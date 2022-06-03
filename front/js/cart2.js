/*fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data))

let cart = window.localStorage.getItem("product");
let productLocalStorage = JSON.parse("product");
console.log(cart);
/*let cart = []
let productLocalStorage = JSON.parse(localStorage.getItem("product"));

const cartItems = document.getElementById('cart__items');

function addProducts(product) {

    for (let i = 0; i < productLocalStorage.length; i++) {
        const text = document.createElement('p');
        //text.innerText='"bonjour"'
        cartItems.appendChild(text);
        const html = `
            <article class="cart__item" data-id="${product[i]._id}"> 
                <div class="cart__item__img">
                    <img src="${product[i].imageUrl}" alt="${product[i].altTxt}">
                </div>
                <div class="cart__item__content">
                    <div class="cart__item__content__titlePrice">
                    <h2>${product[i].description}</h2>
                    <p>Product Option</p>
                    <p>€</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input id="quantity" type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="1 " onchange="updateCurrentProduct(this.value)>
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem" onclick="eraseCartItem(_id)">Delete</p>
                    </div>
                  </div>
                </div>
              </article> 
`;
    }
}*/

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
    let productLocalStorage = []
    for (let i = 0; i < productLocalStorage.length; i++)
        productLocalStorage = productLocalStorage + `
    <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
        <div class="cart__item__img">
            <img src="../images/product01.jpg" alt="Photographie d'un canapé">
        </div>
        <div class="cart__item__content">
            <div class="cart__item__content__description">
                <h2>Nom du produit</h2>
                <p>Vert</p>
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
    `
    //console.log(productLocalStorage)
}
