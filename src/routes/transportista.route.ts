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

router.post('/', (req, res) => {
    transportistaController.createTransportista(req.body)
        .then(() => res.status(201).json({ mensaje: 'Transportista creado' }))
        .catch(e => res.status(500).json(e));
});


router.put('/:id', (req, res) => {
    transportistaController.updateTransportista(Number(req.params.id), req.body)
        .then(() => res.json({ mensaje: 'Transportista actualizado' }))
        .catch(e => res.status(500).json(e));
});


router.delete('/:id', (req, res) => {
    transportistaController.deleteTransportista(Number(req.params.id))
        .then(() => res.json({ mensaje: 'Transportista eliminado' }))
        .catch(e => res.status(500).json(e));
});
export default router;

//llamo el controlador correspondiente 