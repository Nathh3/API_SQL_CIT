import * as TransportistaDao from '../dao/transportista.dao';
import { Transportista } from '../models/transportista';

export const getTransportista= async (): Promise<Transportista[]> => {
    try {
        let p = await TransportistaDao.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}

//nuevo,editar,elimar  y llamo el dao y despues rutas