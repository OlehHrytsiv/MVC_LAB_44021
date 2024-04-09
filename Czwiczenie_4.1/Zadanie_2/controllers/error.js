exports.getNotFoundPage = (request, response, next) => {
    response.render('NotFound', { title: 'Not found' });
};