const express = require('express');
const path = require("path");
const app = express();
const routes = require('./routes');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(routes);
app.set("view engine", "ejs")
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
const connection = require('./database/connection')
app.get('/', (req, res) => res.send('Server is running'));

connection.sync().then(result => {
    console.log(result);
    app.listen(9999);  
}).catch(error => {
    console.log(error);
});