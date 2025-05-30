import getConnection from "../conexion/conection";
import { Usuario } from "../models/usuarios";


export const listarUsuario = async(): Promise<Usuario[]>=>{
try {

    let respuestica : Usuario []=[];
    const mongo = getConnection();
    const collection = mongo.db.collection("usuarios");
    const resultado_de_datos = await collection.find({}).toArray();
            respuestica = resultado_de_datos.map((item)=> new Usuario((item._id), 
            item.nombre,item.edad));
            await mongo.client.close();
            return respuestica;
} catch (error) {
    throw error;
    
}

}

export const insertar = async(p: Usuario): Promise<boolean>  =>{
        try {
            const mongo= getConnection();
            const collection = mongo.db.collection("usuarios");
            const resultado_de_datos = await collection.insertOne(p);
            await mongo.client.close();
            return resultado_de_datos.acknowledged;
        }catch (error){
            throw error
        }

}


export const actualizar = async(p: Usuario): Promise<boolean>  =>{
    try {
        const mongo= getConnection();
        const collection = mongo.db.collection("usuarios");
        const resultado_de_datos = await collection.updateOne({ id: p._id },
  { $set: {nombre:p.nombre, edad:p.edad} });
        await mongo.client.close();
        return resultado_de_datos.acknowledged;
    }catch (error){
        throw error
    }

}

export const Eliminar = async(p:Usuario): Promise<boolean>=>{
    try {
        const mongo= getConnection();
        const collection = mongo.db.collection("usuarios");
        const resultado_de_datos = await collection.deleteOne({id: p._id});
        await mongo.client.close();
        return resultado_de_datos.acknowledged;
        
    } catch (error) {
        throw error
        
    }
}