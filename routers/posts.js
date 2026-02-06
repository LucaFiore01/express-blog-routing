// index
app.get('/posts', function (req, res) {
    res.send('Lista dei post');
});

// show
app.get('/posts/:id', function (req, res) {
    res.send('Dettaglio dei post' + req.params.id);
}); 