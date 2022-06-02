"user strict";
let cart = window.localStorage.getItem("cart");
let cartArray = JSON.parse(cart);
console.log(cart);

const cartItems = document.getElementById('cart__items');

function makeCards(cartArray) {

    for (let i = 0; i < cartArray.length; i++) {
        const text = document.createElement('p');
        //text.innerText='"Hello"'
        cartItems.appendChild(text);
        const html = `
            <article class="cart__item" data-id="${cartArray[i]._id}"> 
                <div class="cart__item__img">
                  <img src="${cartArray[i].imageUrl}" alt="${cartArray[i].altTxt}">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__titlePrice">
                    <h2>${cartArray[i].description}</h2>
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
