import { Usuario } from "../models/usuarios";
import* as DaoUsuario from "../dao/usuario.dao"


export const Getusuarios = async () : Promise<Usuario[]> =>{
    try{
        let respuestica :Usuario[] = await DaoUsuario.listarUsuario();
        return respuestica;
    } catch (error){
        throw error;
    }
}

export const Postusuario = async (p: Usuario) : Promise<Boolean> =>{
    try{
       
        return await DaoUsuario.insertar(p);
    } catch (error){
        throw error;
    }
}