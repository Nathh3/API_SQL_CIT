import * as TrabajoController from '../controllers/trabajo.controller';
import express from 'express';

const router = express.Router();

router.get('/', (_, rs) => {
    TrabajoController.getTrabajo()
        .then(obj => {
            rs.json(obj);
        })
        .catch(e => {
            rs.status(500).json(e);
        })
});

export default router;