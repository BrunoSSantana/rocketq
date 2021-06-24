const routes = require('express').Router();

const QuestionController = require('./controllers/QuestionController');


routes.get('/', (request, response) => response.render('index', {page: 'enter-room'} ));
routes.get('/create-pass', (request, response) => response.render('index', {page: 'create-pass'}));
routes.get('/room', (request, response) => response.render('room'));

// Formato que o formulário de dentro da modal tem que passar 
routes.post('/room/:room/:question/:action', QuestionController.index);

module.exports = routes;