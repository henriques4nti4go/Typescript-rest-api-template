import {Router} from 'express';

export default class Resources {

    /**
     * createResource
     */
    public createResource(path:string,Controller:any) {
        const app = Router();
        app.get(`${path}`,new Controller().index);
        // app.post('/',new Controller().index);
        // app.put('/',new Controller().index);
        // app.delete('/',new Controller().index);
        return app;
    }
}