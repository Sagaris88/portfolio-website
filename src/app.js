const path = require('path')
const express = require('express')
const hbs = require('hbs');
const fileUpload = require('express-fileupload');

const calculateSales = require('./calculateSales');

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
    })
})

app.get('/posts', (req, res) => {
    res.render('posts', {
        title: 'Help Me',
        message: 'Questions?',
    })
})

app.get('/spadina', (req, res) => {
    res.render('spadina', {
        title: 'Help Me',
        message: 'Questions?',
    })
})

app.get('/viewSales', function (req, res) {
    res.render('viewSales');
});

app.post('/store', (req, res) => {
    const decodedContents = req.files['fileToUpload'].data.toString();

    const mapOutput = calculateSales(decodedContents);

    res.render('store', {
        title: 'Help Me',
        message: 'Questions?',
        mapOutputJson: JSON.stringify(mapOutput),
    });
});


app.get('/test', (req, res) => {
    res.render('test', {
        title: 'Help Me',
        message: 'Questions?',
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        message: 'Page not found',
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})