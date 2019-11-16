//Shopping cart using Classes
const ul = document.getElementById('listUl');

class Product {
    constructor(name, price, currentCurrency) {
        this.name = name;
        this.price = price;
        this.currentCurrency = currentCurrency;
    }


}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    addProduct(product) {
        this.products.push(product);
    }
    removeProduct(product) {
        const removeIndex = this.products.indexOf(product);
        this.products.splice(removeIndex, 1);
    }
    searchProduct(productName) {
        return this.products.filter((product) => {
            //console.log(mac);
            return product.name === productName.name;
        })
    }
    getTotal() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            const priceItem = this.products[i].price;
            const priceOfProducts = parseInt(priceItem);
            total += priceOfProducts;
        }
        //console.log('The total price of products : ' + total);
        return total
    }
    renderProducts() {
        this.products.forEach(product => {
            const li = document.createElement('li')
            li.textContent = `Product Name : ${product.name} & Price: ${product.price} dkk`
            ul.appendChild(li);
        })
        return ul
    }
    getUser() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
    }
}

function fetchConvertedCurrencyAndManipulateDOM(fromCurrency, toCurrency, amount) {
    const apiKey = "wxzCFMWmRKAmUnsT3gwn8Xzx6UKk3d";
    fetch(`https://www.amdoren.com/api/currency.php?api_key=${apiKey}&from=${fromCurrency}&to=${toCurrency}&amount=${amount}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const li = document.createElement('li');
            li.textContent = `Price in ${currency} = ${data.amount}`
            ul.appendChild(li);
        });
}

const flatscreen = new Product('flat-screen', 5000);
const mac = new Product("macbook", 8000);
const iphone = new Product("iphone11", 9000);
const fridge = new Product("samsung", 3000);
const shoppingCart = new ShoppingCart([flatscreen, mac, iphone]);
//console.log(shoppingCart);
shoppingCart.addProduct(fridge);
//console.log(shoppingCart.products);
shoppingCart.removeProduct(flatscreen);
//console.log(shoppingCart.products)
shoppingCart.searchProduct(mac);
shoppingCart.getTotal();
shoppingCart.renderProducts();
shoppingCart.getUser();

const prodWithCurrency = new Product("prodWithCurrency", 100, "DKK");
console.log(fetchConvertedCurrencyAndManipulateDOM(prodWithCurrency.currentCurrency, 'EURO', prodWithCurrency.price));

