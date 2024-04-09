exports.getAddNewStudentPage = (request, response, next) => {
    response.render('Home', { title: 'Add new student' });
};