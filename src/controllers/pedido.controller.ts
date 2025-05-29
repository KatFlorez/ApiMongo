
import {Pedido} from "../models/pedido";
import * as DaoPedido from "../dao/pedido.dao";

export const Getpedido = async (): Promise<Pedido[]> =>{
    try{
        let rs: Pedido[] = await DaoPedido.listar();
        return rs;
    }
        catch (error){
            throw error;
        }
}

export const PostPedido = async (p: Pedido): Promise<Boolean> =>{
    try{
        return await DaoPedido. insertar(p);
    }
        catch (error){
            throw error;
        }
}