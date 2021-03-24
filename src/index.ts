<<<<<<< HEAD
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
=======

>>>>>>> 650d84544ee14bb7d3d3a43467f6f941b09f4869
