import express from "express"
import { Restaurante } from "../models/restaurante";
import * as restauranteController from '../controllers/restaurante.controller';

const router = express.Router();
router.get('/',(rq, rs) => {
    restauranteController.Getrestaurantes()
    .then((obj) => {
        rs.json(obj);
    })
    .catch((e) => {
        rs.status(500).json(e);
    })
});

router.get('/:id', (rq, rs) => {
    restauranteController.Getrestaurante(rq.params.id)
    .then((obj) => {
        rs.json(obj);
    })
    .catch((e) => {
        rs.status(500).json(e);
    })
});

router.get('/tipo/:tipoCocina', (rq, rs) => {
    restauranteController.GetrestaurantesPorTipoCocina(rq.params.tipoCocina)
    .then((obj) => {
        rs.json(obj);
    })
    .catch((e) => {
        rs.status(500).json(e);
    })
});

router.post('/', (rq, rs) => {
    restauranteController.Postrestaurante(rq.body as Restaurante)
    .then((obj) => {
        if (obj) {
            rs.status(201).json({ mensaje: 'Restaurante creado exitosamente' });
        } else {
            rs.status(400).json({ mensaje: 'Error al crear restaurante' });
        }
    })
    .catch((e) => {
        rs.status(500).json(e);
    })
});

router.put('/', (rq, rs) => {
    restauranteController.Putrestaurante(rq.body as Restaurante)
    .then((obj) => {
        if (obj) {
            rs.status(201).send();
        } else {
            rs.status(500).send();
        }
    })
    .catch((e) => {
        rs.status(500).json(e);
    })
});

router.delete('/', (rq, rs) => {
    restauranteController.Deleterestaurante(rq.body as Restaurante)
    .then((obj) => {
       if (obj) {
        rs.status(204).send();
       } else {
        rs.status(500).send();
       }
    })
    .catch((e) => {
        rs.status(500).json(e);
    })
});

export default router; 