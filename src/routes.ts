import { Router,Request,Response } from 'express';
import Resouces from './controllers/Resource';
import HomeController from './controllers/HomeController';
import RoutesComponents from './RoutesComponents';
const routes = Router();
const resource = new Resouces();


// routes.use(resource.createResource('/',HomeController));

routes.route('/teste')

// const routesAmigables = new RoutesComponents(routes);

// routesAmigables.groups('/',(router) => {
    
// });


export default routes;
