import getConnection from "../conexion/connection";
import { Cliente } from "../models/cliente";

export const get = async (): Promise<Cliente[]> => {
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

export const create = async (data: Cliente): Promise<boolean> => {
    try {
        const tsql = `
            INSERT INTO Cliente (Nombre, Email, Telefono)
            VALUES (@Nombre, @Email, @Telefono)
        `;

        const pool = await getConnection();
        await pool.request()
            .input('Nombre', data.Nombre)
            .input('Email', data.Email)
            .input('Telefono', data.Telefono)
            .query(tsql);

        return true;
    } catch (error) {
        throw error;
    }
};

export const update = async (id: number, data: Cliente): Promise<boolean> => {
    try {
        const tsql = `
            UPDATE Cliente SET
                Nombre = @Nombre,
                Email = @Email,
                Telefono = @Telefono
            WHERE IdCliente = @id
        `;

        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .input('Nombre', data.Nombre)
            .input('Email', data.Email)
            .input('Telefono', data.Telefono)
            .query(tsql);

        return true;
    } catch (error) {
        throw error;
    }
};

export const eliminar = async (id: number): Promise<boolean> => {
    try {
        const tsql = `DELETE FROM Cliente WHERE IdCliente = @id`;

        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .query(tsql);

        return true;
    } catch (error) {
        throw error;
    }
};




//CREAR UN METODO PARA LOGIN RECIBE USARIO Y CONTRASEÑA Y VA Y HACE UN WHERE 