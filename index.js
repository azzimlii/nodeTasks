const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '<sizin_şifrə>', 
  database: 'archive',
});

connection.connect((err) => {
  if (!err) {
    console.log('SUCCESS');
  } else {
    console.log('Error connecting to database:', err.message);
  }
});





app.get('/user', (req, res) => {
  connection.query('SELECT * FROM movies;', (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
});

app.put('/user/:id', (req, res) => {
  const id = req.params.id;
  const { title, director, release_year } = req.body; 

  const query = `UPDATE movies SET title = ?, director = ?, release_year = ? WHERE id = ?`;
  const values = [title, director, release_year, id];

  connection.query(query, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.affectedRows > 0) {
      res.json({ message: 'Movie updated successfully' });
    } else {
      res.status(404).json({ message: 'Movie not found or no changes made' });
    }
  });
});


app.delete('/user/:id', (req, res) => {
  const id = req.params.id;

  const query = 'DELETE FROM movies WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.affectedRows > 0) {
      res.json({ message: 'Movie deleted successfully' });
    } else {
      res.status(404).json({ message: 'Movie not found' });
    }
  });
});

// connection.query(`
//   INSERT INTO movies (title, years, director)
//   VALUES
//     ('aaa', 2988, 'ehoueh')
// `, 
// (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// });
// connection.query("UPDATE movies SET title = 'John' WHERE title = 'The Godfather'", (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// });
connection.query("DELETE FROM movies WHERE title = 'aaa'", (err, data) => {
  if (!err) {
    console.log(data);
  }
});
app.listen(4000, () => {
  console.log('App listening at port 4000');
});
