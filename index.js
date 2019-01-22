const express = require('express')

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('home'));

app.listen(process.evn.PORT || 300, () => console.log(' Server started'));
