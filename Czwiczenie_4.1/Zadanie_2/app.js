const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      PORT = 3000,
      errorController = require('./controllers/error');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.render('Home', { title: 'Home' });
});

app.get('/success', (request, response) => {
  response.render('Success', { title: 'Success' });
});

app.get('/students-list', (request, response) => {
  response.render('List', { title: 'List' });
});

app.post('/add-student', (request, response) => {
  response.redirect('/List');
});

app.use(errorController.getNotFoundPage);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
