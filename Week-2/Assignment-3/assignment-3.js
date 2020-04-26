// Assignment 3

function avg(data) {
    let price = 0;
    let product = data.products;
    for (let i = 0; i < data.size; i++) {
        price += product[i].price;
    }
    return (price/data.size);
}

console.log(
    avg({
        size:3,
        products:[
        {
            name:"Product 1",
            price:100
         },
         {
            name:"Product 2",
            price:700
        },
        {
            name:"Product 3",
            price:250
        }
    ]
})); // should print the average price of all products