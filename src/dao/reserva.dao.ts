import { Reserva } from "../models/reserva";
import { ObjectId } from "mongodb";
import getConnection from "../conexion/conection";

export const listarReservas = async (usuarioId: string): Promise<Reserva[]> => {
    try {
        let respuesta: Reserva[] = [];
        const mongo = getConnection();
        const collection = mongo.db.collection("reservas");
        const resultado_de_datos = await collection
            .find({ usuarioId })
            .sort({ fecha: 1, hora: 1 })
            .toArray();
        respuesta = resultado_de_datos.map((item) => new Reserva(new ObjectId(item._id), item.usuarioId, item.restauranteId, item.fecha, item.hora, item.numeroPersonas, item.numeroMesa, item.estado));
        await mongo.client.close();
        return respuesta;
    } catch (error) {
        throw error;
    }
};

export const insertar = async (reserva: Reserva): Promise<boolean> => {
    try {
        const mongo = getConnection();
        const collection = mongo.db.collection("reservas");
        const resultado_de_datos = await collection.insertOne(reserva);
        await mongo.client.close();
        return resultado_de_datos.acknowledged;
    } catch (error) {
        throw error;
    }
};

export const cancelar = async (id: string): Promise<boolean> => {
    try {
        const mongo = getConnection();
        const collection = mongo.db.collection("reservas");
        const resultado_de_datos = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { estado: 'cancelada' } }
        );
        await mongo.client.close();
        return resultado_de_datos.acknowledged;
    } catch (error) {
        throw error;
    }
};

export const verificarDisponibilidad = async (
    restauranteId: string,
    fecha: Date,
    hora: string,
    numeroMesa: number
): Promise<boolean> => {
    try {
        const mongo = getConnection();
        const collection = mongo.db.collection("reservas");
        const reservaExistente = await collection.findOne({
            restauranteId,
            fecha,
            hora,
            numeroMesa,
            estado: { $ne: 'cancelada' }
        });
        await mongo.client.close();
        return !reservaExistente;
    } catch (error) {
        throw error;
    }
}; 