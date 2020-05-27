export class IPaquete {
    id: string;
    compania: string;
    n_acciones: number;
    precio_compra: number;
    precio_venta: number;
}

export class Paquete implements IPaquete{
    id: string;
    compania: string;
    n_acciones: number;
    precio_compra: number;
    precio_venta: number;

    constructor(o?:IPaquete){
        if(o != undefined) Object.assign(this,o);
    }
}
