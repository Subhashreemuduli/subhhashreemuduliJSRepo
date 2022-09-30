items = [
    {item: "Shampoo", price: 5.99},
    {item: "Rubber Ducks",price: 15.99},
    {item: "Flatscreen TV",price: 399.99} ,
    {item: "Monopoly",price: 11.99},
    {item: "Secret Hitler",price: 35.99}, 
    {item: "Bananagrams", price: 13.99}
]


function freeShipping(...order){
    var total = 0;
    for(var i of order){
        total += i.price
    }
    return total > 50
}

console.log(freeShipping({item: "Shampoo", price: 5.99},{item: "Rubber Ducks",price: 15.99}));
console.log(freeShipping({item: "Shampoo", price: 5.99},{item: "Flatscreen TV",price: 399.99} ));

