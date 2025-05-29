import * as TransportistaDao from '../dao/transportista.dao';
import { Transportista } from '../models/transportista';

export const getTransportista = async (): Promise<Transportista[]> => {
    try {
        let p = await TransportistaDao.get();
        return p;
    } catch (error) {
        throw error;
    }
}

export const createTransportista = async (data: Transportista): Promise<boolean> => {
    try {
        return await TransportistaDao.create(data);
    } catch (error) {
        throw error;
    }
};

export const updateTransportista = async (id: number, data: Transportista): Promise<boolean> => {
    try {
        return await TransportistaDao.update(id, data);
    } catch (error) {
        throw error;
    }
};

export const deleteTransportista = async (id: number): Promise<boolean> => {
    try {
        return await TransportistaDao.eliminar(id);
    } catch (error) {
        throw error;
    }
};
//nuevo,editar,elimar  y llamo el dao y despues rutas