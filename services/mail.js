const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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');

exports.sendMail = (data) => {
    console.log(data);
    let new_data = {
        from: 'bawache.n@rediffmail.com', // Change to your recipient
        to: 'hardikarchinmay1993@gmail.com', // Change to your verified sender
        subject: 'Weather report',
        text: `The weather in ${data['name']} is ${data['main']['temp']} deg celcius with maximum of ${data['main']['temp_max']} deg celcius and minimum of ${data['main']['temp_min']} deg celcius, The wind speed is recorded to be ${data['wind']['speed']}m/s with humidity of ${data['main']['humidity']}%`,
        html: `<strong>The weather in ${data['name']} is ${data['main']['temp']} deg celcius with maximum of ${data['main']['temp_max']} deg celcius and minimum of ${data['main']['temp_min']} deg celcius, The wind speed is recorded to be ${data['wind']['speed']}m/s with humidity of ${data['main']['humidity']}%</strong>`,
    };
    send_mail(new_data);
}

function send_mail(msg) {
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}