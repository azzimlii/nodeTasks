const express = require('express');
const app = express();
const fs = require('fs');

app.get('/', function (req, res) {
    fs.readFile('./tasks/task1/data.json', 'utf8', (err, data) => {
        if (!err) {
            const workers = JSON.parse(data);
            res.send({ workers });
        }
        else {
            console.error(err);
        }
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});