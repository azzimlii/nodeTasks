// const express = require('express');
// const app = express();
// const fs = require('fs');

// app.get('/', function (req, res) {
//     fs.readFile('./tasks/task1/data.json', 'utf8', (err, data) => {
//         if (!err) {
//             const workers = JSON.parse(data);
//             res.send({ workers });
//         }
//         else {
//             console.error(err);
//         }
//     });
// });

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });


// const express = require('express');
// const app = express();

// const card = [
//     {
//         id: 1,
//         number: '4893 8392 8392 0283'
//     },
//     {
//         id: 2,
//         number: '4893 8392 8389 1361'
//     },
//     {
//         id: 3,
//         number: '4893 8392 3091 1256'
//     }
// ];
// app.get('/card', function (req, res) {
//     res.json(card);
// });

// app.get('/card/:id', function (req, res) {
//     const cards = card.find((cards) => cards.id === parseInt(req.params.id));
//     if (cards) {
//         res.json(cards);  
//         res.status(200).send('Ok');  

//     } else {
//         res.status(404).send('Card not found');  
//     }
// });

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });

const users = [];
const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/user', function (req, res) {
  users.push(req.body);
  res.json(req.body);
});
app.get('/user', function (req, res) {
 res.json(users);
});
app.listen(3000, () =>
  console.log(`App listening at port 3000`)
);