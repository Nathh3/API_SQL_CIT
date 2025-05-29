import getConnection from "../conexion/connection";
import { Trabajo } from "../models/trabajo";

export const get = async (): Promise<Trabajo[]> => {
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

export const create = async (data: Trabajo): Promise<boolean> => {
    try {
        let tsql = `
        INSERT INTO Trabajo ( idCliente, idTransportista, lugarOrigen, lugarDestino, fechaRecogida,fechaEntrega, TipoCamionRequerido,PesoCarga, TransporteComestibles, Estibas)
        VALUES ( @idCliente, @idTransportista, @lugarOrigen, @lugarDestino, @fechaRecogida,@fechaEntrega, @TipoCamionRequerido,@PesoCarga, @TransporteComestibles, @Estibas)`
            ;
        const pool = await getConnection();
        await pool.request()
            .input('idCliente', data.idCliente)
            .input('IdTransportista', data.idTransportista)
            .input('lugarOrigen', data.lugarOrigen)
            .input('lugarDestino', data.lugarDestino)
            .input('fechaRecogida', data.fechaRecogida)
            .input('fechaEntrega', data.fechaEntrega)
            .input('TipoCamionRequerido', data.TipoCamionRequerido)
            .input('PesoCarga', data.PesoCarga)
            .input('TransporteComestibles', data.TransporteComestibles)
            .input('Estibas', data.Estibas)
            .query(tsql);

        return true;
    } catch (error) {
        throw error;
    }

}

export const update = async (id: number, data: Trabajo): Promise<boolean> => {
    try {
        const tsql = `
        UPDATE trabajo SET
            idCliente = @idCliente,
            idTransportista = @idTransportista,
            lugarOrigen = @lugarOrigen,
            lugarDestino = @lugarDestino,
            fechaRecogida = @fechaRecogida,
            fechaEntrega = @fechaEntrega,
            TipoCamionRequerido = @TipoCamionRequerido,
            PesoCarga = @PesoCarga,
            TransporteComestibles = @TransporteComestibles,
            Estibas = @Estibas
        WHERE idTrabajo = @id
        `;

        const pool = await getConnection();
        await pool.request()
            .input('idCliente', data.idCliente)
            .input('idTransportista', data.idTransportista)
            .input('lugarOrigen', data.lugarOrigen)
            .input('lugarDestino', data.lugarDestino)
            .input('fechaRecogida', data.fechaRecogida)
            .input('fechaEntrega', data.fechaEntrega)
            .input('TipoCamionRequerido', data.TipoCamionRequerido)
            .input('PesoCarga', data.PesoCarga)
            .input('TransporteComestibles', data.TransporteComestibles)
            .input('Estibas', data.Estibas)
            .query(tsql);

        return true;
    } catch (error) {
        throw error;
    }


};

export const eliminar = async (id: number): Promise<boolean> => {
    try {
        const tsql = `DELETE FROM Trabajo WHERE idTrabajo = @id`;

        const pool = await getConnection();
        await pool.request()
            .input('id', id)
            .query(tsql);

        return true;
    } catch (error) {
        throw error;
    }
};

export const getMatch = async (idTransportista: number): Promise<Trabajo[]> => {
    try {
        let tsql = `SELECT traba.* 
FROM Trabajo traba, Transportista trans
WHERE traba.TipoCamionRequerido = trans.TipoCamion
AND  traba.PesoCarga>=trans.CapacidadCarga
AND traba.TransporteComestibles = trans.TransporteComestibles
AND traba.Estibas =trans.Estibas
AND traba.fechaRecogida = trans.FechaDsiponible
AND traba.idTransportista IS NULL`;
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

export const updateTrabajoAceptado = async (idTransportista: number, data: Trabajo): Promise<boolean> => {
    try {
        const tsql = `
        UPDATE trabajo SET
            idTransportista = @idTransportista,
            WHERE idTrabajo = @id
        `;

        const pool = await getConnection();
        await pool.request()
            .input('idTransportista', data.idTransportista)
            .query(tsql);

        return true;
    } catch (error) {
        throw error;
    }


};