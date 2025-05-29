import * as clienteController from '../controllers/cliente.controller';
import express from 'express';

const router = express.Router();

router.get('/', (_, rs) => {
    clienteController.getCliente()
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            rs.status(500).json(e);
        })
});

router.post('/', (req, res) => {
    clienteController.createCliente(req.body)
        .then(() => res.status(201).json({ mensaje: 'Cliente creado' }))
        .catch(e => res.status(500).json(e));
});

router.put('/:id', (req, res) => {
    clienteController.updateCliente(Number(req.params.id), req.body)
        .then(() => res.json({ mensaje: 'Cliente actualizado' }))
        .catch(e => res.status(500).json(e));
});

router.delete('/:id', (req, res) => {
    clienteController.deleteCliente(Number(req.params.id))
        .then(() => res.json({ mensaje: 'Cliente eliminado' }))
        .catch(e => res.status(500).json(e));
});

export default router;