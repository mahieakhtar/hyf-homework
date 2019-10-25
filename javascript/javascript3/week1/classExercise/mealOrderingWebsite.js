let meal = [
    {
        "ordername": "order-1",
        "orderid": 1,
        "price": { 100: "dkk" },
        "drinks": ["cola", "coffee"],
        "extras": [
            {
                "name": "Cheese",
                "id": 23,
                "quantity": 1
            },
            {
                "name": "lettuce",
                "id": 34,
                "quantity": 1
            }
        ]
    },
    {
        "ordername": "order-2",
        "orderid": 2,
        "price": { 200: "dkk" },
        "drinks": ["cola", "coffee", "pepsi"],
        "extras": [
            {
                "name": "Cheese",
                "id": 20,
                "quantity": 9
            },
            {
                "name": "lettuce",
                "id": 30,
                "quantity": 5
            }
        ]
    }];
let x = "";
for (i in meal) {
    x += "<h1>" + "Orders : " + meal[i].ordername + "</h1>";
    //x += "<h3>" + "Drink : " + meal[i].drinks + "</h3>";
    // console.log(meal[i].extras);
    //for (j in meal[i].extras) {
    //console.log(meal[i].extras[j].name);
    // x += "<h3>" + "Extras : " + meal[i].extras[j].name + "</h3>";

    //}
}
document.getElementById("demo").innerHTML = x;


