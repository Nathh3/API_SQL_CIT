import * as clienteDao from '../dao/cliente.dao';
import { Cliente } from '../models/cliente';

export const getCliente = async (): Promise<Cliente[]> => {
    try {
        let p = await clienteDao.get();
        return p;
    } catch (error) {
        throw error;
    }
}

export const createCliente = async (data: Cliente): Promise<boolean> => {
    try {
        return await clienteDao.create(data);

    } catch (error) {
        throw error;
    }
}

export const updateCliente = async (id: number, data: Cliente): Promise<boolean> => {
    try {
        return await clienteDao.update(id, data);
    } catch (error) {
        throw error;
    }
};

export const deleteCliente = async (id: number): Promise<boolean> => {
    try {
        return await clienteDao.eliminar(id);
    } catch (error) {
        throw error;
    }
};