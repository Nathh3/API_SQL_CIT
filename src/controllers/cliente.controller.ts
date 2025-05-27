import * as clienteDao from '../dao/cliente.dao';
import { Cliente } from '../models/cliente';

export const getCliente = async (): Promise<Cliente[]> => {
    try {
        let p = await clienteDao.Listar();
        return p;
    } catch (error) {
        throw error;
    }
}