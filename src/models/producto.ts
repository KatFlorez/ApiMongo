import { ObjectId } from "mongodb";

export class Producto{

        _id: ObjectId;
        nombreProd: string;
        descripcionProd: string;
        precioProd: number;
        cantidadProd: number;
        categoriaProd: string;
    
        constructor (id:ObjectId, nombreProd: string, descripcionProd: string, precioProd: number, cantidadProd: number, categoriaProd: string){
            this._id=id;
            this.nombreProd=nombreProd;
            this.descripcionProd=descripcionProd;
            this.precioProd=precioProd;
            this.cantidadProd=cantidadProd;
            this.categoriaProd=categoriaProd;
        }
    
}