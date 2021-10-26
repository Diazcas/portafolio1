const express = require('express')
const app = express();

const port = 3000;
app.use(express.static(__dirname + '/public'))

// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');


app.listen(port, () => {
    console.log('servidor en el puerto', port)
})