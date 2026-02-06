// index
app.get('/posts', function (req, res) {
    res.send('Lista dei post');
});

// show
app.get('/posts/:id', function (req, res) {
    res.send('Dettaglio dei post' + req.params.id);
});

// store
app.post('/posts', function (req, res) {
    res.send('Creazione nuovo post');
});

// update
app.put('/posts/:id', function (req, res) {
    res.send('Modifica integrale dei post' + req.params.id);
});