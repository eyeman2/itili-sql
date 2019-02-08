var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'NoShitcolumbo21',
        database: 'itili_db',
        port: 3306,
        options: {
            operatorsAliases: false
        }
    })
}

var app = express();
var PORT = process.env.PORT || 8080;
var db = require('./models');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

require('./routes/html-routes.js')(app);
require('./routes/api-routes')(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("==> Listening on port %s.", PORT)
    })
})