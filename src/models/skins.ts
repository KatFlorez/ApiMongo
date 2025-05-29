import { ObjectId } from "mongodb";

export class Skins{
    _id: ObjectId;
    nombre: string;
    valor: number;
    disponible: boolean;
    colores: string[];

    constructor (id:ObjectId, nombre: string, valor:number, disponible:boolean, colores:string[]){
        this._id=id;
        this.nombre=nombre;
        this.valor=valor;
        this.disponible=disponible;
        this.colores=colores;
    }
}