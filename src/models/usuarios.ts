import { ObjectId } from "mongodb";


export class Usuario{
    _id: ObjectId;
    nombre:string;  

constructor(id:ObjectId,name:string){
    this._id = id;
    this.nombre=name;
}
}