import { Restaurante } from "../models/restaurante";
import getConnection from "../conexion/conection";


export const listarRestaurantes = async (): Promise<Restaurante[]> => {
    try {
        let respuesta : Restaurante[] = [];
        const mongo = getConnection();
        const collection = mongo.db.collection("restaurantes");
        const resultado_de_datos = await collection.find({}).toArray();
        respuesta = resultado_de_datos.map((item)=> new Restaurante(item._id, item.nombre, item.direccion, item.tipoCocina, item.capacidadMaxima, item.horariosOperacion, item.mesas));
        await mongo.client.close();
        return respuesta;
    } catch (error) {
        throw error;
    }
};

export const buscarPorTipoCocina = async (tipoCocina: string): Promise<Restaurante[]> => {
    try {
        let respuesta : Restaurante[] = [];
        const mongo = getConnection();
        const collection = mongo.db.collection("restaurantes");
        const resultado_de_datos = await collection.find({tipoCocina}).toArray();
        respuesta = resultado_de_datos.map((item)=> new Restaurante(item._id, item.nombre, item.direccion, item.tipoCocina, item.capacidadMaxima, item.horariosOperacion, item.mesas));
        await mongo.client.close();
        return respuesta;
    } catch (error) {
        throw error;
    }
};

export const obtenerRestaurante = async (nombre: string): Promise<Restaurante | null> => {
    try {
        let respuesta : Restaurante | null = null;
        const mongo = getConnection();
        const collection = mongo.db.collection("restaurantes");
        const resultado_de_datos = await collection.findOne({nombre});
        respuesta = resultado_de_datos ? new Restaurante(resultado_de_datos._id, resultado_de_datos.nombre, resultado_de_datos.direccion, resultado_de_datos.tipoCocina, resultado_de_datos.capacidadMaxima, resultado_de_datos.horariosOperacion, resultado_de_datos.mesas) : null;
        await mongo.client.close();
        return respuesta;
    } catch (error) {
        throw error;
    }
};

export const insertar = async (restaurante: Restaurante): Promise<boolean> => {
    try {
        const mongo = getConnection();
        const collection = mongo.db.collection("restaurantes");
        const resultado_de_datos = await collection.insertOne(restaurante);
        await mongo.client.close();
        return resultado_de_datos.acknowledged;
    } catch (error) {
        throw error;
    }
};

export const actualizar = async (restaurante: Restaurante): Promise<boolean> => {
    try {
        const mongo = getConnection();
        const collection = mongo.db.collection("restaurantes");
        const resultado_de_datos = await collection.updateOne({_id: restaurante._id}, {$set: restaurante});
        await mongo.client.close();
        return resultado_de_datos.acknowledged;
    } catch (error) {
        throw error;
    }
};

export const eliminar = async (restaurante: Restaurante): Promise<boolean> => {
    try {
        const mongo = getConnection();
        const collection = mongo.db.collection("restaurantes");
        const resultado_de_datos = await collection.deleteOne({_id: restaurante._id});
        await mongo.client.close();
        return resultado_de_datos.acknowledged;
    } catch (error) {
        throw error;
    }
};