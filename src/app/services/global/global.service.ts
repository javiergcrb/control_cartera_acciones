import { Injectable, Attribute } from '@angular/core';
import { Paquete } from 'src/app/paquete';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private login:boolean;
  private usr_name:string;
  private usr_id:string;

  public acciones:Paquete[] = [
    {id: "ASDIVAJWEJ", compania: "REP.MC", n_acciones: 100, precio_compra: 12.50, precio_venta: 0},
    {id: "IOVAIERNBF", compania: "IBE.MC", n_acciones: 150, precio_compra: 18.50, precio_venta: 0},
    {id: "BIOWEROENF", compania: "AMZN", n_acciones: 300, precio_compra: 120.50, precio_venta: 0},
    {id: "VIQPENURQO", compania: "NFLX", n_acciones: 10, precio_compra: 95.50, precio_venta: 0}
  ]; 

  constructor() {
    this.login = true; //Poner false para activar el login
    this.usr_id = '';
    this.usr_name = '';
  }

  public get_login():boolean{
    return this.login;
  }

  public set_login(login:boolean):void{
    this.login = login;
  }

  public get_username():string{
    return this.usr_name;
  }

  public set_username(name:string):void{
    this.usr_name = name;
  }

  public get_userid():string{
    return this.usr_id;
  }

  public set_userid(id:string):void{
    this.usr_id = id;
  }
}
