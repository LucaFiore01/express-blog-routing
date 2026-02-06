const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
