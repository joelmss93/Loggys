import express from 'express';

const LogisticaController = require('./controllers/LogisticaController');

const routes = express.Router();

routes.get('/logisticas', LogisticaController.index);
routes.get('/logisticas/:id', LogisticaController.show);
routes.post('/logisticas', LogisticaController.store);
routes.put('/logisticas/:id', LogisticaController.update);
routes.delete('/logisticas/:id', LogisticaController.delete);


export default routes;