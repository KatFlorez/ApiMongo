import * as DaoRestaurante from '../dao/restaurante.dao';
import { Restaurante } from '../models/restaurante';

export const Getrestaurantes = async (): Promise<Restaurante[]> => {
    try {
        return await DaoRestaurante.listarRestaurantes();
    } catch (error) {
        throw error;
    }
};

export const Getrestaurante = async (id: string): Promise<Restaurante | null> => {
    try {
        return await DaoRestaurante.obtenerRestaurante(id);
    } catch (error) {
        throw error;
    }
};

export const GetrestaurantesPorTipoCocina = async (tipoCocina: string): Promise<Restaurante[]> => {
    try {
        return await DaoRestaurante.buscarPorTipoCocina(tipoCocina);
    } catch (error) {
        throw error;
    }
};

export const Postrestaurante = async (restaurante: Restaurante): Promise<boolean> => {
    try {
        return await DaoRestaurante.insertar(restaurante);
    } catch (error) {
        throw error;
    }
};

export const Putrestaurante = async (restaurante: Restaurante): Promise<boolean> => {
    try {
        return await DaoRestaurante.actualizar(restaurante);
    } catch (error) {
        throw error;
    }
};

export const Deleterestaurante = async (restaurante: Restaurante): Promise<boolean> => {
    try {
        return await DaoRestaurante.eliminar(restaurante);
    } catch (error) {
        throw error;
    }
};