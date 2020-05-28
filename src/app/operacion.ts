export class IOperacion {
    id: string;
    tipo: number;
    compania: string;
    fecha: number;
    n_acciones: number;
    i_total: number;
}

export class Operacion implements IOperacion
{
    id: string;
    tipo: number;
    compania: string;
    fecha: number;
    n_acciones: number;
    i_total: number;

    constructor(o?:IOperacion)
    {
        if(o !== undefined) Object.assign(this,o);
    }
}

export class ViewOperacion{

    private static TIPOS:string[]=['','Compra','Venta'];
        
    public static getTipo(operacion:Operacion)
    {
        return ViewOperacion.TIPOS[operacion.tipo];
    }
}