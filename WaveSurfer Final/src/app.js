const express = require("express");
const path = require("path");
const hbs = require('hbs')
const fileUpload = require("express-fileupload");

// routes 
const routes = require('../routes/index')

const Port = 4700;

//require('')
const app = express()

// Passing fileUpload as a middleware
app.use(fileUpload());
const pageDirectory = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname, '../views')
const viewsPartials = path.join(__dirname, '../partials')
const headerDirectory = path.join(__dirname, '../partials/header.hbs')
app. set('view engine', 'hbs')
app.set('views', viewsDirectory)
hbs.registerPartials(viewsPartials)
hbs.registerPartial('header', headerDirectory);
app.use(express.static(pageDirectory))
app.use(routes);





// app.get('*', (req, res) => {

//     res.render('404', {
//         title: '404 Page',
//         description: 'This Page doesn\'t exist',
//     })
// })


app.listen(Port, () => {
    console.log('server is up at port:' + Port);
})