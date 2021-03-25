import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import express from 'express';
import routes from './routes';
import {} from 'typeorm';
require('dotenv').config();


createConnection().then(async connection => {


    const app = express();
    app.use(express.json());
    app.use(routes);
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // user.save();
    app.listen(process.env.SERVER_PORT,() => console.log('server running!'));
    


}).catch(error => console.log(error));
