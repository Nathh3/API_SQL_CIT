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

export default router;