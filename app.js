const express = require('express');
const cors = require('cors');
var request = require('requests');

const app = express();

app.use(cors())

let port = process.env.PORT || 4000;

// let URI = 'api.openweathermap.org/data/2.5/weather?q=Pune&appid=1a519892f1765781dca5cbc681371375'

app.get('/getweather', cors(), (req, res) => {
    console.log(req.query);
    try {
        request(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=1a519892f1765781dca5cbc681371375`)
            .on('data', (chunk) => {
                let obj_data = JSON.parse(chunk);

                if (obj_data['cod'] == 200) {

                    let output_obj = {
                        'status': 'success',
                        'weather_data': obj_data,
                        'message': "Weather data fetched successfully!!!"
                    }
                    res.send(output_obj);
                } else {
                    let output_obj = {
                        'status': 'failure',
                        'weather_data': obj_data,
                        'message': `Unable to fetch data for ${req.query.name}`
                    }
                    res.send(output_obj);
                }

            })
            .on('end', (err) => {
                if (err) return console.log('connection closed due to errors', err);
                console.log('end');
            });
    } catch (e) {
        res.send(e);
    }


});

app.listen(port, (err, success) => {
    console.log(`Started listening on port ${port}`);
});
