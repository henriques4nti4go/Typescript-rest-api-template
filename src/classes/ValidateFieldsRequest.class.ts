import {ProcessingReturnData} from './ProcessingReturnData.class';

export class ValidateFieldsRequest {
    private fields:object;
    private required_fields:string[]
    private errors:string[] = [];
    private message;
    private processData:ProcessingReturnData;

    private verifyFieldsPassed(){
        // const array_of_objects = Object.entries(this.fields);
        this.required_fields.forEach(element => {
            if (!this.fields[`${element}`]) this.errors.push(element);
        });
    }

    private formatMessageError() {
        let fields = '';
        this.errors.forEach(element => {
            fields += `${element},`;
        });
        return `has error an ocurred in ${fields}`;
    }

    private formatError(){
        // this.returnDataWithPattern({})
    }

    public hasErros(fields:object,required_fields:string[]){
        this.fields = fields;
        this.required_fields = required_fields;
        this.verifyFieldsPassed(); 
        
        if (this.errors.length > 0) {
            return this.processData.returnDataWithPattern({code:400,error:true,descriptionCode:'has occurred an error'});
        }
        
    };
}