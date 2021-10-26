const express = require('express');
const { ppid } = require('process');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) =>{
    res.render("index")
})

app.get('/proyectos', (req, res) =>{
    res.render("proyectos")
})

app.get('/recorrido', (req, res) =>{
    res.render("recorrido")
})


app.listen(port, () => {
    console.log('servidor en el puerto', port)
})