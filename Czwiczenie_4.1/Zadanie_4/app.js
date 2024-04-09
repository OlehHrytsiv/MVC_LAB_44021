const express = require('express'),
      bodyParser = require('body-parser'),
      studentsController = require('./controllers/students'),
      app = express(),
      PORT = 3000,
      errorController = require('./controllers/error');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.render('Home', { title: 'Home' });
});

app.get('/students-list', studentsController.getStudentsListPage);

app.post('/add-student', studentsController.addStudent);

app.get('/success', studentsController.getAddingNewStudentSuccessPage);

app.use(errorController.getNotFoundPage);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
