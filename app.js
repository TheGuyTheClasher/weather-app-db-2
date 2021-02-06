const express = require('express');

const app = express();

let port = process.env.PORT || 4000;

let URI = 'api.openweathermap.org/data/2.5/weather?q=Pune&appid=1a519892f1765781dca5cbc681371375'

app.listen(port, (err, success) => {
    console.log(`Listening on port ${port}`);
})

app.get('/name', (req, res) => {

});

