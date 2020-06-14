const path = require('path');
const express = require('express');
const languages = require('./languages.json');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/results', (req, res) => {
    let userRequest = req.query.id;
    //console.log(req.query.id);
    if (!userRequest) {
        userRequest = '';
    } 
    console.log(languages.list);
    res.render('response', {li: languages.list});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`)
});