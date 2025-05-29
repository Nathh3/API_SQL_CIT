import { pool } from "mssql";
import getConnection from "../conexion/connection";
import { Transportista } from "../models/transportista";

export const get = async (): Promise<Transportista[]> => {
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

export const create = async (data: Transportista): Promise<boolean> => {
    try {
        let tsql = `
        INSERT INTO Transportista ( Nombre, Email, Telefono,TipoCamion, CapacidadCarga,TransporteComestibles, Estibas, FechaDisponible)
        VALUES (@Nombre, @Email, @Telefono,@TipoCamion, @CapacidadCarga,@TransporteComestibles, @Estibas, @FechaDisponible)`
            ;
        const pool = await getConnection();
        await pool.request()
            .input('Nombre', data.Nombre)
            .input('Email', data.Email)
            .input('Telefono', data.Telefono)
            .input('TipoCamion', data.TipoCamion)
            .input('CapacidadCarga', data.CapacidadCarga)
            .input('TransporteComestibles', data.TransporteComestibles)
            .input('Estibas', data.Estibas)
            .input('FechaDisponible', data.FechaDisponible)
            .query(tsql);

            return true;
    } catch (error) {
        throw error;
    }

}   


export const update = async (id: number, data: Transportista): Promise<boolean> => {
    try {
        const tsql = `
        UPDATE Transportista SET
            Nombre = @Nombre,
            Email = @Email,
            Telefono = @Telefono,
            TipoCamion = @TipoCamion,
            CapacidadCarga = @CapacidadCarga,
            TransporteComestibles = @TransporteComestibles,
            Estibas = @Estibas,
            FechaDisponible = @FechaDisponible
        WHERE IdTransportista = @Id
        `;

        const pool = await getConnection();
        await pool.request()
            .input('Id', id)
            .input('Nombre', data.Nombre)
            .input('Email', data.Email)
            .input('Telefono', data.Telefono)
            .input('TipoCamion', data.TipoCamion)
            .input('CapacidadCarga', data.CapacidadCarga)
            .input('TransporteComestibles', data.TransporteComestibles)
            .input('Estibas', data.Estibas)
            .input('FechaDisponible', data.FechaDisponible)
            .query(tsql);

        return true;
    } catch (error) {
        throw error;
    }
};

export const eliminar = async (id: number): Promise<boolean> => {
    try {
        const tsql = `DELETE FROM Transportista WHERE IdTransportista = @Id`;

        const pool = await getConnection();
        await pool.request()
            .input('Id', id)
            .query(tsql);

        return true;
    } catch (error) {
        throw error;
    }
};

//CREAR UN METODO PARA LOGIN RECIBE USARIO Y CONTRASEÑA Y VA Y HACE UN WHERE Y CREAR UN CONTROLADOR DE LOGIN
//CREO LOS METODOS nuevo,editar,elimar PARA MATCH TENGO QUE HACER UNA CONSULTA RECIBO ID DE TRANSPORTISTA DESDE LA VISTA Y BUSCO EN LA BASE DE DATOS 