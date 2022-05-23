//recupération produit par #id//
const queryString = window.location.search
const urlParam = new URLSearchParams(queryString)
const id = urlParam.get("id")
if (id != null) {
    let prix = 0
    let imgUrl, altText, kanapName
}

//requete serveur api par id et recupération fonction//
fetch(`http://localhost:3000/api/products/${id}`)
    .then((responce) => responce.json())
    .then((res) => productKanap(res))

//intégration  fonction au html//
function productKanap(kanap) {
    const { id, name, imageUrl, altTxt, price, description, colors } = kanap
    addProducts(imageUrl, altTxt, name, price, description, colors,)
    prix = price

}

//fonction produit recupération  //
function addProducts(imageUrl, altTxt, name, price, description, colors) {
    let image = document.createElement("img")
    image.src = imageUrl
    altTxt.src = altTxt
    kanapName = name
    imgUrl = imageUrl
    altText = altTxt
    let parent = document.querySelector(".item__img")
    if (parent != null) parent.appendChild(image)

    //nom//
    let title = document.querySelector("#title")
    if (title != null) title.textContent = name

    //prix//
    let span = document.querySelector("#price")
    if (span != null) span.textContent = price

    //description
    let p = document.querySelector("#description")
    if (p != null) p.textContent = description

    //couleurs//
    let select = document.querySelector("#colors")
    if (select != null) {
        colors.forEach((color) => {
            let option = document.createElement("option")
            option.value = color
            option.textContent = color
            select.appendChild(option)
        });
    }
}

//ajout au panier //

let button = document.querySelector("#addToCart")
if (button != null) {
    button.addEventListener("click", (e) => {
        let color = document.querySelector("#colors").value
        let quantity = document.querySelector("#quantity").value
        if (color == null || color === '' || quantity == null || quantity == 0) {
            alert("Selectionnez une couleur et une quantité")
            return
        }
        const key = `${id}-${color}`
        const data = {
            id: id,
            color: color,
            quantity: quantity,
            price: prix,
            imageUrl: imgUrl,
            altTxt: altText,
            name: kanapName
        }

        localStorage.setItem(key, JSON.stringify(data))
    })
}

