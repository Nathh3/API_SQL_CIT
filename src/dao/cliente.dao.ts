import getConnection from "../conexion/connection";
import { Cliente } from "../models/cliente";

export const Listar = async (): Promise<Cliente[]> => {
    try {
        let tsql = "SELECT * FROM Cliente";
        const pool = await getConnection();
        let rs = await pool.query<Cliente>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

//CREAR UN METODO PARA LOGIN RECIBE USARIO Y CONTRASEÑA Y VA Y HACE UN WHERE 