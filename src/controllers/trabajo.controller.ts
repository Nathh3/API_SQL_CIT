import * as trabajoDao from '../dao/trabajo.dao';
import { Trabajo } from '../models/trabajo';

export const getTrabajo = async (): Promise<Trabajo[]> => {
    try {
        let p = await trabajoDao.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}