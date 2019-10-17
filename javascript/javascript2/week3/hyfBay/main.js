console.log('Script loaded');

/*let products = getAvailableProducts();
const productUl = document.querySelector("section.products > ul");

function renderProducts(productList) {

    for (let i = 0; i < productList.length; i++) {
        const product = productList[i];
        const productLi = document.createElement("li");
        productUl.appendChild(productLi);
        productLi.appendChild(renderProduct(product));
    }
}

function renderProduct(product) {
    const productSectionElement = document.createElement("ul");

    const productNameElement = document.createElement("li");
    productNameElement.innerText = product.name;
    productSectionElement.appendChild(productNameElement);

    const productPriceElement = document.createElement("li");
    productPriceElement.innerText = product.price;
    productSectionElement.appendChild(productPriceElement);

    const productRatingElement = document.createElement("li");
    productRatingElement.innerText = product.rating;
    productSectionElement.appendChild(productRatingElement);

    const productShipToElement = document.createElement("li");

    //ShippingList element
    const shippingListElement = document.createElement("ul");
    const shipItemArray = product.shipsTo;
    for (let i = 0; i < product.shipsTo.length; i++) {
        const countryElement = document.createElement("li");
        countryElement.innerText = shipItemArray[i];
        shippingListElement.appendChild(countryElement);
    }
    productSectionElement.appendChild(shippingListElement);

    return productSectionElement;
}

//renderProducts(products);

const searchProduct = document.querySelector('div.search input');
let inputText = "";
let filterSearch = "";
searchProduct.addEventListener("change", function () {
    inputText = searchProduct.value.toUpperCase().trim();
    filterSearch = products.filter(product => product.name.toUpperCase().trim().includes(inputText));
    renderProducts(filterSearch);
});*/

let products = getAvailableProducts();
console.log(products);
let productPrice = products.map(product => product.price);
console.log(productPrice);

const callBackFunction = callback => {
    console.log('Response received');
}

sendPricesToServer((productPrice), callBackFunction);
