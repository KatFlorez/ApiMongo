import express from "express"
import * as reservaController from '../controllers/reserva.controller';

const router = express.Router();
router.get('/usuario/:usuarioId', async (req, res) => {
    try {
        const reservas = await reservaController.Getreservas(req.params.usuarioId);
        res.json(reservas);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener reservas', error });
    }
});

router.post('/', async (req, res) => {
    try {
        const resultado = await reservaController.Postreserva(req.body);
        if (resultado) {
            res.status(201).json({ mensaje: 'Reserva creada exitosamente' });
        } else {
            res.status(400).json({ mensaje: 'Error al crear reserva' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear reserva', error });
    }
});

router.put('/:id/cancelar', async (req, res) => {
    try {
        const resultado = await reservaController.Cancelarreserva(req.params.id);
        if (resultado) {
            res.json({ mensaje: 'Reserva cancelada exitosamente' });
        } else {
            res.status(404).json({ mensaje: 'Reserva no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al cancelar reserva', error });
    }
});

export default router; 