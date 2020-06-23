const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.post('/sum/', (req, res) => {
    console.log(req.body);
    if (req.body.number1 && req.body.number1) {
        res.json({ result: parseInt(req.body.number1) + parseInt(req.body.number1) })
    }
    else {
        res.sendStatus(400)
    }

});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))