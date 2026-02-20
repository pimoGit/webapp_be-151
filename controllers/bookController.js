// importiamo la connessione del DB
const connection = require('../data/db');

// funzione di index
function index(req, res) {
    // prepariamo la query
    const sql = 'SELECT * FROM books';

    // eseguiamo la query!
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });

}

// funzione di show
function show(req, res) {
    // recuperiamo id da param dinamico
    const { id } = req.params;

    // prepariamo la query per la richiesta
    const bookSql = 'SELECT * FROM books WHERE id = ?';

    connection.query(bookSql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: 'Book not found' });

        // salviamo il risultato in una cost
        const book = results[0];

        // ritorniamo il json del libro
        res.json(book);
    });
}

module.exports = { index, show }