const express = require('express'),
      bodyParser = require('body-parser'),
      app = express(),
      PORT = 3000;

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

app.get('/add-student', (request, response) => {
  response.redirect('List');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
