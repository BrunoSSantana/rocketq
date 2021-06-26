const routes = require('express').Router();

const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');


routes.get('/', (request, response) => response.render('index', {page: 'enter-room'} ));
routes.get('/create-pass', (request, response) => response.render('index', {page: 'create-pass'}));

routes.post('/create-room', RoomController.create);
routes.get('/room/:room', RoomController.open);
routes.post('/enterrom', RoomController.enter)

routes.post('/question/create/:room', QuestionController.create)
routes.post('/question/:room/:question/:action', QuestionController.index);

module.exports = routes;