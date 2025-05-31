import { ObjectId } from "mongodb";

export class Reserva {
    _id?: ObjectId;
    usuarioId: string;
    restauranteId: string;
    fecha: Date;
    hora: string;
    numeroPersonas: number;
    numeroMesa: number;
    estado: 'pendiente' | 'confirmada' | 'cancelada';

    constructor(id: ObjectId, usuarioId: string, restauranteId: string, fecha: Date, hora: string, numeroPersonas: number, numeroMesa: number, estado: 'pendiente' | 'confirmada' | 'cancelada') {
        this._id = id;
        this.usuarioId = usuarioId;
        this.restauranteId = restauranteId;
        this.fecha = fecha;
        this.hora = hora;
        this.numeroPersonas = numeroPersonas;
        this.numeroMesa = numeroMesa;
        this.estado = estado;
    }
} 