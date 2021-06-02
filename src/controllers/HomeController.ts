import { request, Request, response, Response } from 'express';
import Controller from './Controller';
import {User} from '../entity/User';


export default class HomeController extends Controller {
  
  constructor(request:Request,response:Response){
    super(request,response);
  }
  /**
   * index
   */
  public index() {
    try {
      let fields = {
        name: 'paulo',
        password: 123,
        login: 'asda',
      }

      let required_fields = [
        'name',
        'password',
        'login',
      ]
      
      this.processData.returnDataWithPattern({
        code: 400,
        descriptionCode: 'page not found',
        error:true
      });
      // this.validation_fields_request.hasErros(fields,required_fields);
      return this.processData.returnDataWithPattern({
        code: 200,
        descriptionCode: 'success',
        error:false
      });
      
      console.log('sem erro')
    } catch (error) {
      return this.processData.returnError(error);
    }
  }
}

