import * as express from 'express';
import { Index } from 'typeorm';
import HomeController from './controllers/HomeController';

let route = express();

route.get('/' , new HomeController().index);

export default route;