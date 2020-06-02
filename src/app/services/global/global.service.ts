import { Injectable, Attribute } from '@angular/core';
import { Paquete } from 'src/app/paquete';
import { Usuario } from 'src/app/usuario';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public login:boolean;
  public usr:Usuario;
  public paquetes: Paquete[];
  //private usr_id:string;

  private acciones:Paquete[] = [
    {id: "ASDIVAJWEJ", compania: "REP.MC", n_acciones: 100, precio_compra: 12.50, precio_venta: 0},
    {id: "IOVAIERNBF", compania: "IBE.MC", n_acciones: 150, precio_compra: 18.50, precio_venta: 0},
    {id: "BIOWEROENF", compania: "AMZN", n_acciones: 300, precio_compra: 120.50, precio_venta: 0},
    {id: "VIQPENURQO", compania: "NFLX", n_acciones: 10, precio_compra: 95.50, precio_venta: 0}
  ]; 

  constructor() {
    this.login = false; //Poner false para activar el login
    this.usr = new Usuario();
    this.usr.id = '';
    this.usr.nombre = '';
    this.paquetes = [];
    
  }
}
