import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paquete } from '../paquete';
import {MatTable} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.scss']
})
export class CarteraComponent implements OnInit {

  @ViewChild(MatTable,{static:true}) tabladatos: MatTable<any>;

  public acciones: Paquete[];
  public displayedColumns: string[] = ['nombre', 'nacciones', 'pcompra','pventa','rentabilidad'];

  constructor(public router: Router, public route: ActivatedRoute,
    private _snackBar: MatSnackBar) {
      this.acciones = [
        {id: "ASDIVAJWEJ", compania: "REPSOL", n_acciones: 100, precio_compra: 12.50, precio_venta: 13.00},
        {id: "IOVAIERNBF", compania: "IBERDROLA", n_acciones: 150, precio_compra: 18.50, precio_venta: 20.00},
        {id: "BIOWEROENF", compania: "AMAZON", n_acciones: 300, precio_compra: 120.50, precio_venta: 150.00},
        {id: "VIQPENURQO", compania: "APPLE", n_acciones: 10, precio_compra: 95.50, precio_venta: 90.00}
      ]; 
     }

  ngOnInit(): void {
  }
  public getData()
  {
    
    return this.acciones;
      
  }

  public calcularTotal()
  {
    let total:number = 0;
    this.acciones.forEach(element => {
      total += element.precio_venta-element.precio_compra
    });
    return total;
  }

}
