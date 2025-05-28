import { Skins } from "../models/skins";
import * as DaoSkins from "../dao/skin.dao";

export const Getskins = async () : Promise<Skins[]> =>{
    try{
        let rs: Skins[] = await DaoSkins.listar();
        return rs;
    } catch (error){
        throw error;
    }
}

export const Postskins = async (p: Skins) : Promise<Boolean> =>{
    try{
       
        return await DaoSkins.insertar(p);
    } catch (error){
        throw error;
    }
}