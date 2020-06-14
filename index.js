const path = require('path');
const express = require('express');
const languages = require('./languages.json');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/results', (req, res) => {
    let userRequest = req.query.id;
    //If user does not input a string all entries will be given
    if (!userRequest) {
        userRequest = '';
    } 
    let languagesChosen = [];
    for(let i = 0; i < languages.length; i++) {
        if (languages[i].name.includes(userRequest)) {
            languagesChosen.push(languages[i]);
        }
    }
    res.render('response', {li: languagesChosen});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`)
});