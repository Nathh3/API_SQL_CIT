export interface Transportista {
    idTrabajo: number;
    idCliente: number;
    IdTransportista: number;
    Nombre:string;
    lugarOrigen: string;
    lugarDestino: string;
    fechaRecogida: Date;
    fechaEntrega: Date;
    TipoCamionRequerido: string;
    PesoCarga: number; 
    TransporteComestibles: boolean;
    Estibas: boolean;

    // constructor(
    //     idTrabajo: number,
    //     idCliente: number,
    //     idTransportista: number,
    //     lugarOrigen: string,
    //     lugarDestino: string,
    //     fechaRecogida: Date,
    //     fechaEntrega: Date,
    //     TipoCamionRequerido: string,
    //     PesoCarga: number,
    //     TransporteComestibles: boolean,
    //     Estibas: boolean
    // ) {
    //     this.idTrabajo = idTrabajo;
    //     this.idCliente = idCliente;
    //     this.idTransportista = idTransportista;
    //     this.lugarOrigen = lugarOrigen;
    //     this.lugarDestino = lugarDestino;
    //     this.fechaRecogida = fechaRecogida;
    //     this.fechaEntrega = fechaEntrega;
    //     this.TipoCamionRequerido = TipoCamionRequerido;
    //     this.PesoCarga = PesoCarga;
    //     this.TransporteComestibles = TransporteComestibles;
    //     this.Estibas = Estibas;
    // }
}


