
import { ObjectId } from "mongodb";
import getConnection from "../conexion/conection";
import { Pedido } from "../models/pedido";
import { Producto } from "../models/producto";

export const listar = async(): Promise<Pedido[]>  =>{
    try {
        let rs: Pedido[]=[];
        const mongo= getConnection();
        const collection = mongo.db.collection("pedido");
        
        const resultado_de_datos = await collection.find({}).toArray();
        console.log(resultado_de_datos)
        rs = resultado_de_datos.map((item)=> new Pedido(item._id, item.usuarioId, item.productos));
        await mongo.client.close();
        return rs;

    }catch (error){
        throw error
    }
}

    export const insertar = async(p: Pedido): Promise<boolean>  =>{
        try {
            const mongo= getConnection();
            const collection = mongo.db.collection("pedido");
            const resultado_de_datos = await collection.insertOne(p);
            await mongo.client.close();
            return resultado_de_datos.acknowledged;
        }catch (error){
            throw error
        }

}

export const actualizar = async(p: Pedido): Promise<boolean>  =>{
    try {
        const mongo= getConnection();
        const collection = mongo.db.collection("pedido");
        const resultado_de_datos = await collection.updateOne({_id: p._id},p);
        await mongo.client.close();
        return resultado_de_datos.acknowledged;
    }catch (error){
        throw error
    }

}
export const Eliminar = async(p:Pedido): Promise<boolean>=>{
    try {
        const mongo= getConnection();
        const collection = mongo.db.collection("pedido");
        const resultado_de_datos = await collection.deleteOne({id: p._id});
        await mongo.client.close();
        return resultado_de_datos.acknowledged;
        
    } catch (error) {
        throw error
        
    }
}


