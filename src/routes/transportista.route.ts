import * as transportistaController from '../controllers/transportista.controller';
import express from 'express';

const router = express.Router();

router.get('/', (_, rs) => {
    transportistaController.getTransportista()
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            rs.status(500).json(e);
        })
});

export default router;

//llamo el controlador correspondiente 