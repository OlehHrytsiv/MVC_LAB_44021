const fs = require('fs');
const path = require('path');
const homeView = require('../views/home');
const studentView = require('../views/student');

exports.handleHome = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(homeView.renderPage());
};

exports.handleStudent = (req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const params = new URLSearchParams(body);
            const studentData = {
                code: params.get('code'),
                name: params.get('name'),
                lastname: params.get('lastname'),
                gender: params.get('gender'),
                age: params.get('age'),
                studyField: params.get('studyField'),
            };
            fs.writeFileSync(path.join(__dirname, '..', 'data', `${studentData.code}.txt`), JSON.stringify(studentData));
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(studentView.renderPage(studentData));
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(studentView.renderPage());
    }
};
