const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html', (err) => {
        if (err) console.log(err)
        else {
            console.log('Sent: ' + __dirname + '/views/index.html');
        }
    })
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})