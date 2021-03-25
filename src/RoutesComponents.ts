import {Router} from 'express';
export default class RoutesComponents{
    private routes;
    constructor(routes:Router){
        this.routes = Router();
        // routes.route('/')
    }

    /**
     * groups
     */
    public groups(prefix:string, callback:CallableFunction) {
        this.routes.

        callback(this.routesWay);
    }
}