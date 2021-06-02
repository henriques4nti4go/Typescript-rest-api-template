import { Request, response, Response } from "express";

interface IHTTPResponse{
    code: number;
    error: boolean;
    descriptionCode: string;
    descriptionError?: string;
    response?: object;
}

export class ProcessingReturnData {
    private response:Response;

    constructor(request,response){
        this.response = response;
    }

    public returnDataWithPattern(body?:IHTTPResponse){
        if (body.error == true) throw body;
        return this.response.status(body.code).json(body);
    }

    public returnError(body:IHTTPResponse){
        return this.response.status(body.code).json(body);
    }

}