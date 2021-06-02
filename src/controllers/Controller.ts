import {Request,Response} from 'express';
import {ValidateFieldsRequest} from '../classes/ValidateFieldsRequest.class';
 import {ProcessingReturnData} from '../classes/ProcessingReturnData.class';
export default class Controllers {
    public validation_fields_request = new ValidateFieldsRequest();
    public processData:ProcessingReturnData;
    
    constructor(request,response:Response){
        this.processData = new ProcessingReturnData(request,response)
    }

    /**
     * index
     */
    public index(request:Request,response:Response) {
        
    }

    /**
     * store
     */
    public store(request:Request,response:Response) {
        
    }

    /**
     * update
     */
    public update(request:Request,response:Response) {
        
    }

    /**
     * delete
     */
    public delete(request:Request,response:Response) {
        
    }
}