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

router.post('/', (req, res) => {
  TrabajoController.createTrabajo(req.body)
    .then(() => res.status(201).json({ mensaje: 'Trabajo creado' }))
    .catch(e => res.status(500).json(e));
});

router.put('/:id', (req, res) => {
  TrabajoController.updateTrabajo(Number(req.params.id), req.body)
    .then(() => res.json({ mensaje: 'Trabajo actualizado' }))
    .catch(e => res.status(500).json(e));
});

router.delete('/:id', (req, res) => {
  TrabajoController.deleteTrabajo(Number(req.params.id))
    .then(() => res.json({ mensaje: 'Trabajo eliminado' }))
    .catch(e => res.status(500).json(e));
});


export default router;