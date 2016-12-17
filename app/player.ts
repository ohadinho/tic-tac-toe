export class Player {
    id : string;
    sign : string;
    
    constructor(public idParam:string, public signParam: string) {
        this.id = idParam;
        this.sign = signParam;
    }
}