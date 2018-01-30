let express = require('express');
let fs = require('fs');
let bodyParser = require('body-parser');

let stringData = '';
let app = express();

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/assets/index.html');
});

app.get('/userform', (req,res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    }
    console.log('Otrzymałem żądanie GET do /userform');
    res.end(JSON.stringify(response));
});

let server = app.listen(3000,'localhost', ()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`listen:: ${host}:${port}`);
});

app.use(express.static('assets'));

app.use((req,res,next)=>{
    res.status(404).send('Err404');
});