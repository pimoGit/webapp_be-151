// importiamo la connessione del DB
const connection = require('../data/db');

// funzione di index
function index(req, res) {
    // fai cose
    console.log("hai richiesto la index");

}

// funzione di show
function show(req, res) {
    // fai cose
    console.log("hai richiesto la show");
}

module.exports = { index, show }