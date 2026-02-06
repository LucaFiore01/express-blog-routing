const express = require('express');
const postsRouter = require('./routers/posts');

const app = express();

app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.use('/posts', postsRouter);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
