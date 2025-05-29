import * as trabajoDao from '../dao/trabajo.dao';
import { Trabajo } from '../models/trabajo';

export const getTrabajo = async (): Promise<Trabajo[]> => {
    try {
        let p = await trabajoDao.get();
        return p;
    } catch (error) {
        throw error;
    }
}

export const createTrabajo = async (data: Trabajo): Promise<boolean> => {
    try {
        return await trabajoDao.create(data);
    } catch (error) {
        throw error;
    }
};

export const updateTrabajo = async (id: number, data: Trabajo): Promise<boolean> => {
    try {
        return await trabajoDao.update(id, data);
    } catch (error) {
        throw error;
    }
};

export const deleteTrabajo = async (id: number): Promise<boolean> => {
    try {
        return await trabajoDao.eliminar(id);
    } catch (error) {
        throw error;
    }
};