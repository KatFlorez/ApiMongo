import express from 'express';
import * as Pedidocontroller from '../controllers/pedido.controller';
import { Pedido } from '../models/pedido';

const router = express.Router();

router.get('/', (rq, rs) => {
    Pedidocontroller.Getpedido()
    .then((obj)=> {
        rs.json(obj);
    })
    .catch((e)=>{
    rs.status(500).json(e);
    })
});

router.post('/',(rq, rs) => {
    Pedidocontroller.PostPedido(rq.body as Pedido)
        .then((obj) => {
            if(obj)
            rs.status(201).send();
        else
            rs.status(500).send()
        })
        .catch((e)=>{
            rs.status(500).json(e);
        })
});
export default router;
