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

export const Putusuario = async(p: Usuario) : Promise<Boolean> => {

    try {
        return await DaoUsuario.actualizar(p)
    } catch (error) {
        throw error
    }
}

export const Deleteusuario = async(p: Usuario) : Promise<Boolean> => {

    try {
        return await DaoUsuario.Eliminar(p)
    } catch (error) {
        throw error
    }
}