import getConnection from "../conexion/connection";
import { Trabajo } from "../models/trabajo";

export const Listar = async (): Promise<Trabajo[]> => {
    try {
        let tsql = "SELECT * FROM Trabajo";
        const pool = await getConnection();
        let rs = await pool.query<Trabajo>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}