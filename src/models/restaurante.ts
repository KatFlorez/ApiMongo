import { ObjectId } from "mongodb";

export class Restaurante {
    _id: ObjectId;
    nombre: string;
    direccion: string;
    tipoCocina: string;
    capacidadMaxima: number;
    horariosOperacion: {
        dia: string;
        apertura: string;
        cierre: string;
    }[];
    mesas: {
        numero: number;
        capacidad: number;
    }[];

    constructor(id: ObjectId, nombre: string, direccion: string, tipoCocina: string, capacidadMaxima: number, horariosOperacion: { dia: string; apertura: string; cierre: string; }[], mesas: { numero: number; capacidad: number; }[]) {
        this._id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.tipoCocina = tipoCocina;
        this.capacidadMaxima = capacidadMaxima;
        this.horariosOperacion = horariosOperacion;
        this.mesas = mesas;
    }
} 