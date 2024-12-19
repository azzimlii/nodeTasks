
//task 1.2
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


//task 1.3
// const users = [];
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.post('/user', function (req, res) {
//   users.push(req.body);
//   res.json(req.body);
// });
// app.get('/user', function (req, res) {
//  res.json(users);
// });
// app.listen(3000, () =>
//   console.log(`App listening at port 3000`)
// );

//task 2.2
const express = require('express');
// const mysql = require('mysql')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

// let users = [
//   {
//     id: 1,
//     name: 'Bill',
//     accountNumber: '1946 8337 8763 5292',
//     amount: 100000
//   },
//   {
//     id: 2,
//     name: 'Bill',
//     accountNumber: '1946 8337 8763 5292',
//     amount: 100000
//   },
//   {
//     id: 3,
//     name: 'Bill',
//     accountNumber: '1946 8337 8763 5292',
//     amount: 100000
//   }
// ];

// const connection = mysql.createConnection({
//   host: 'DC',
//   port:3306,
//   user: 'root',
//   password: 'password',
//   database: 'archive'
// })

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database.');
// });

// connection.query('SELECT name FROM clients', 
//   (err, data) => {
//     if (!err) {
//       console.log(data);
//     }
//   });

 app.get('/user', (req, res) => {
  connection.query('SELECT * FROM movies;', (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
});

// connection.end()

// app.get('/user', function (req, res) {
//   res.json(users);
// });

app.put("/user/:id", function (req, res) {
  const idOfUser = parseInt(req.params.id); 
  const userIdx = users.findIndex((user) => user.id === idOfUser);

  if (userIdx !== -1) {
    const oldUser = users[userIdx];
    users[userIdx] = { ...oldUser, ...req.body }; 
    res.json(users[userIdx]);
  } else {
    res.status(404).json("not found");
  }
});
app.delete('/user/:id', function (req, res) {
    const idOfUser = parseInt(req.params.id);
    users = users.filter((user) => user.id !== idOfUser);
    res.json(users);
  });
  
app.listen(4000, () => {
  console.log('App listening at port 3000');
});
