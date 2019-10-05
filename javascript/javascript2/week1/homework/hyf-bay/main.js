function renderProducts(productList) {
    const productUl = document.querySelector("section.products > ul");
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

renderProducts(getAvailableProducts());

