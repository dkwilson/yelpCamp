const express = require('express');

const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

let campgrounds = [
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970__340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402__340.jpg"},
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970__340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402__340.jpg"},
    {name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2014/11/27/18/36/tent-548022__340.jpg"},
    {name: "Granite Hill", image: "https://cdn.pixabay.com/photo/2019/10/03/11/14/camp-4522970__340.jpg"},
    {name: "Mountain Goat's Rest", image: "https://cdn.pixabay.com/photo/2016/01/19/16/48/teepee-1149402__340.jpg"}
];

app.get('/', (req, res, next) => {
    res.render('landing')
})

app.get('/campgrounds', (req, res, next) => {
    
    
    res.render('campgrounds', {campgrounds: campgrounds});
})

app.post('/campgrounds', (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = { name: name, image: image };
    campgrounds.push(newCampground);
    res.redirect('/campgrounds');
})

app.get('/campgrounds/new', (req, res) => {
    res.render('new');
})

app.listen(3000, () => {
    console.log('The YelpCamp Server Has Started!');
})