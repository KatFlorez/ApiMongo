import { ObjectId } from "mongodb";
import getConnection from "../conexion/conection";
import { Skins } from "../models/skins";

export const listar = async(): Promise<Skins[]>  =>{
    try {
        let rs: Skins[]=[];
        const mongo= getConnection();
        const collection = mongo.db.collection("skins");
        // const resultado_de_datos = collection.find({valor: { $gt 10}}) --> para bsucar valor
        // const resultado_de_datos = collection.find({disponible: true}) --> para ver dispo
        const resultado_de_datos = await collection.find({}).toArray();
        rs = resultado_de_datos.map((item)=> new Skins((item._id), 
        item.nombre, item.valor, item.disponible, item.colores));
        await mongo.client.close();
        return rs;
    }catch (error){
        throw error
    }
}

    export const insertar = async(p: Skins): Promise<boolean>  =>{
        try {
            const mongo= getConnection();
            const collection = mongo.db.collection("skins");
            const resultado_de_datos = await collection.insertOne(p);
            await mongo.client.close();
            return resultado_de_datos.acknowledged;
        }catch (error){
            throw error
        }

}

export const actualizar = async(p: Skins): Promise<boolean>  =>{
    try {
        const mongo= getConnection();
        const collection = mongo.db.collection("skins");
        const resultado_de_datos = await collection.updateOne({_id: p._id},p);
        await mongo.client.close();
        return resultado_de_datos.acknowledged;
    }catch (error){
        throw error
    }

}