const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
    res.render('landing')
})

app.get('/campgrounds', (req, res, next) => {
    let campgrounds = [
        {name: "Salmon Creek", image: "https://pixabay.com/get/52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c722c7ad29544c350_340.jpg"},
        {name: "Granite Hill", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c722c7ad29544c350_340.jpg"},
        {name: "Mountain Goat's Rest", image: "https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c722c7ad29544c350_340.jpg"}
    ]
    
    res.render('campgrounds', {campgrounds: campgrounds});
})

app.listen(3000, () => {
    console.log('The YelpCamp Server Has Started!');
})