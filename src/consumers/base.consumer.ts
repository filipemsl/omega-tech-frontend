


export abstract class BaseConsumer {

      base_api?: string
    constructor(){
        this.base_api = process.env.API_BASE

    }

    sendData = async function send(data:object, token:string, method:string, end_point:string) {
        switch (method){
            case 'POST': 'alguma coisa'; break;
            case 'PUT': 'alguma coisa'; break;
            case 'DELETE': 'alguma coisa'; break;
            case 'PATCH': 'alguma coisa'; break;
        }
    }

    retrieveData = async function get(id:object,token:string,end_point:string){

    }

    
}