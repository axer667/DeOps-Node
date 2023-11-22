const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hi, Misha!');
});

app.listen(5000, () => {
    console.log('Express is listening on port 5000!')
})