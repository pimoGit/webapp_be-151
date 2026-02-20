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
    // fai cose
    console.log("hai richiesto la show");
}

module.exports = { index, show }