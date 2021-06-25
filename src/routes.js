const routes = require('express').Router();

const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');


routes.get('/', (request, response) => response.render('index', {page: 'enter-room'} ));
routes.get('/create-pass', (request, response) => response.render('index', {page: 'create-pass'}));

routes.get('/room/:room', (request, response) => response.render('room'));

// Formato que o formulário de dentro da modal tem que passar 
routes.post('/question/:room/:question/:action', QuestionController.index);
routes.post('/create-room', RoomController.create)

module.exports = routes;