import { Router,Request,Response } from 'express';
import Resouces from './controllers/Resource';
import HomeController from './controllers/HomeController';

const routes = Router();
const resource = new Resouces();

// routes.use(resource.createResource('/',HomeController));

routes.get('/teste', (request,response) => new HomeController(request,response).index() )

// const routesAmigables = new RoutesComponents(routes);

// routesAmigables.groups('/',(router) => {
    
// });


export default routes;
