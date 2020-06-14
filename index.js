const path = require('path');
const express = require('express');
const fs = require('fs');
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
    res.render('results', {li: languagesChosen, num: languagesChosen.length});
});

app.get('/append', (req, res) => {
    let userLanguage = req.query.lang;
    let userType = req.query.type;
    if (!userLanguage || !userType) {
        res.render('addition', {msg: "Please fill in all inputs.", error: true});
    } else {
        let unique = true;
        for(let i = 0; i < languages.length; i++) {
            if (languages[i].name === userLanguage) {
                res.render('addition', {msg: `${userLanguage} already exists.`, error: true});
                unique = false;
            }
        }
        if (unique) {
            userAddtion = {name: userLanguage, typing: userType};
            languages.push(userAddtion);
            fs.writeFile("languages.json", JSON.stringify(languages, null, 4), err => {
                if (err) throw err;
    
                res.render('addition', {msg: `${userLanguage} was successfully added.`, error: false});
            });
        }
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`)
});