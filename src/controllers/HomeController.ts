import { Request, Response } from 'express';
import Controller from './Controller';
import {User} from '../entity/User';
export default class HomeController extends Controller{
    /**
     * index
     */
    public async index(request:Request, response:Response) {
        let user = new User();
        // user.firstName = "Timber";
        // user.lastName = "Saw";
        // user.age = 25;
        // await user.save();
        const allUsers = await User.find();
      return response.json({route: allUsers});
    }
}