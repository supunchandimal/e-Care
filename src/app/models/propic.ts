export class Ppic{
    $key: String;
    file: File;
    url:String;
    progress:number;
    createdOn:Date = new Date();

    constructor(file : File){
        this.file = file;
    }
} 