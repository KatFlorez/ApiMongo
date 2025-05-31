
import * as DaoReserva from '../dao/reserva.dao';
import { Reserva } from '../models/reserva';

export const Getreservas = async (usuarioId: string): Promise<Reserva[]> => {
    try {
        return await DaoReserva.listarReservas(usuarioId);
    } catch (error) {
        throw error;
    }
};

export const Postreserva = async (reserva: Reserva): Promise<boolean> => {
    try {
        const disponible = await DaoReserva.verificarDisponibilidad(
            reserva.restauranteId,
            reserva.fecha,
            reserva.hora,
            reserva.numeroMesa
        );

        if (!disponible) {
            throw new Error('La mesa no está disponible en ese horario');
        }

        return await DaoReserva.insertar(reserva);
    } catch (error) {
        throw error;
    }
};

export const Cancelarreserva = async (id: string): Promise<boolean> => {
    try {
        return await DaoReserva.cancelar(id);
    } catch (error) {
        throw error;
    }
}; 