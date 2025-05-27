import getConnection from "../conexion/connection";
import { Transportista } from "../models/transportista";

export const Listar = async (): Promise<Transportista[]> => {
    try {
        let tsql = "SELECT * FROM Transportista";
        const pool = await getConnection();
        let rs = await pool.query<Transportista>(tsql);
        if (rs != undefined) {
            return rs.recordset;
        }
        return [];
    } catch (error) {
        throw error;
    }
}

//CREAR UN METODO PARA LOGIN RECIBE USARIO Y CONTRASEÑA Y VA Y HACE UN WHERE Y CREAR UN CONTROLADOR DE LOGIN 
//nuevo,editar,elimar PARA MATCH TENGO QUE HACER UNA CONSULTA RECIBO ID DE TRANSPORTISTA DESDE LA VISTA Y BUSCO EN LA BASE DE DATOS 