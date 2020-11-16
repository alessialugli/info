const express = require ('express');

const app = express();

const port = 3000;

const handlebars = require ('express-handlebars');

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts', 
    partialsDir: __dirname + '/views/partials/'
}));

app.use(express.static('public'))

fakeApi = () => {
    return [
      {
        name: 'Køge',
        lane: 'midlaner'
      },
      {
        name: 'Næstved',
        lane: 'toplaner'
      },
      {
        name: 'Silkeborg',
        lane: 'toplaner'
      }
    ];
}
app.get('/', (req, res) => {
    res.render('main', {layout: 'index', 
    suggestedCities: fakeApi(), listExists: false});
});

app.listen(port, () => console.log(`App listening to port ${port}`));
