import express from "express"
import { Usuario } from "../models/usuarios";
import * as UsuarioController from "../controllers/usuario.controller"

const router = express.Router();
router.get('/', (rq, rs) => {
    UsuarioController.Getusuarios()
        .then((obj) => {
            rs.json(obj);
        })
        .catch((e) => {
            rs.status(500).json(e);
        })
});

router.post('/', (rq, rs) => {
    UsuarioController.Postusuario(rq.body as Usuario)
        .then((obj) => {
            if (obj)
                rs.status(201).send();
            else
                rs.status(500).send()
        })
        .catch((e) => {
            rs.status(500).json(e);
        })
});

router.put('/', (rq, rs) => {
    UsuarioController.Putusuario(rq.body as Usuario).then((obj)=>{
        if (obj) {
            rs.status(201).send();
        } else {
            rs.status(500).send()
            
        }
    }).catch((e) =>{
        rs.status(500).json(e);
    })

});

router.delete('/', (rq, rs) => {
    UsuarioController.Deleteusuario(rq.body as Usuario).then((obj)=>{
        if (obj) {
            rs.status(204).send();
        } else {
            rs.status(500).send()
            
        }
    }).catch((e) =>{
        rs.status(500).json(e);
    })

});

export default router; 