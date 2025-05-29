import { ObjectId } from "mongodb";


export class Usuario{
    _id: ObjectId;
    nombre:string;  
    edad:number;

constructor(id:ObjectId,name:string,edad:number){
   this._id = id;
     this.nombre=name;
    this.edad=edad
}
}