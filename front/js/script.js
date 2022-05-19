fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => addProducts(data))

function addProducts(products) {
    let kanap = "";
    let sectionItem = document.getElementById("items")

    products.forEach(function (products) {
        kanap += `
            <a href="./product.html?id=${products._id}">
                <article>
                        <img src ="${products.imageUrl}">
                        <h3 class="productsName">${products.name}</h3>
                        <p class ="productDescription">${products.description}</p>
                    </article>
            </a>
        `;

    });
    sectionItem.innerHTML = kanap
}