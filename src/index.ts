import "reflect-metadata";
import {createConnection} from "typeorm";
import express from 'express';
import routes from './routes';

require('dotenv').config();

createConnection().then(async connection => {

    const app = express();
    app.use(routes);
    app.listen(process.env.SERVER_PORT,() => console.log(`server running in port => ${process.env.SERVER_PORT}`));

    

}).catch(error => console.log(error));
