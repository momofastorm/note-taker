const { writeFile } = require('fs');
const data = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req,res) => {
    res.json(data);
});

router.post('/notes', ({body},res) => {
    body.id = Math.floor((Math.random() * 10000)).toString(16)
    data.push(body);

    writeFile('./db/db.json', JSON.stringify(data), err => {
        if(err) console.log(err);
        res.json(data);
    });
});

router.delete('/notes/:id', ({params}, res) => {
    data.filter(({id}) => {id != params.id})
    
    writeFile('./db/db.json', JSON.stringify(data), err => {
        if(err) console.log(err);
        res.json(data);
    });
});

module.exports = router;