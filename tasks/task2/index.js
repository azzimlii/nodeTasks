const express = require('express');
const app = express();

const products = [
    { id: 1, name: "t-shirt", price: 50, amount: 3 },
    { id: 2, name: "blouse", price: 20, amount: 12 },
    { id: 3, name: "jacket", price: 40, amount: 41 },
    { id: 4, name: "sweatshirt", price: 35, amount: 34 },
    { id: 5, name: "pants", price: 70, amount: 9 },
    { id: 6, name: "shoes", price: 80, amount: 11 },
    { id: 7, name: "sneaker", price: 65, amount: 24 },
    { id: 8, name: "dress", price: 45, amount: 38 },
    { id: 9, name: "skirt", price: 30, amount: 21 },
    { id: 10, name: "socks", price: 10, amount: 53 }
];

app.get('/', function (req, res) {
    const count = parseInt(req.query.count);
    const offset = parseInt(req.query.offset);
    res.send({ products: products.slice(offset, offset + count) });

});
app.get('/product/:id', function (req, res) {
    const product = products.find((product) => product.id === parseInt(req.params.id));
    if (!product) {
        res.status(404).send("Not found");
    }
    res.status(200).json(product);
});
app.listen(3000, function () {
    console.log("Example app listening on port 3000!")
})