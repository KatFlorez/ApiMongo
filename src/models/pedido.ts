
import {ObjectId} from "mongodb";
import { Producto } from "./producto";

export class Pedido{
    _id: ObjectId;
    usuarioId: number;
    productos: Producto[];

    constructor (id:ObjectId, usuarioId: number, productos: Producto[]){
        this._id=id;
        this.usuarioId=usuarioId
        this.productos=productos
    }
};

