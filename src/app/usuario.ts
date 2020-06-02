import { Paquete } from './paquete';

export class IUsuario {
    id: string;
    nombre: string;
}

export class Usuario implements IUsuario{
    id:string;
    nombre:string;

    constructor(o?:IUsuario){
        if(o != undefined) Object.assign(this,o);
    }
}