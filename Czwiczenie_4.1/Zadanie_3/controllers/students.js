let students = [];
let nextId = 1;

exports.getAddNewStudentPage = (request, response, next) => {
    response.render('Home', { title: 'Add new student' });
};

exports.addStudent = (request, response, next) => {
    const { fullName, code, fieldOfStudies } = request.body,
        id = nextId++;
    students.push({ id, fullName, code, fieldOfStudies });
    response.redirect('/success');
};

exports.getAddingNewStudentSuccessPage = (request, response, next) => {
    response.render('Success', { title: 'Success' });
};

exports.getStudentsListPage = (request, response, next) => {
    response.render('List', { title: 'List', students });
};
