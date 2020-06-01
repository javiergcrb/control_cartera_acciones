import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paquete } from '../paquete';
import {MatTable} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { GlobalService } from '../services/global/global.service';
import { FinanceService } from '../services/finance/finance.service';


@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.scss']
})
export class CarteraComponent implements OnInit {

  @ViewChild(MatTable,{static:true}) tabladatos: MatTable<any>;

  public acciones: Paquete[];
  public displayedColumns: string[] = ['nombre', 'nacciones', 'pcompra','pventa','rentabilidad'];

  public rentabilidad_total: number;

  constructor(public router: Router, public route: ActivatedRoute,
    private _snackBar: MatSnackBar, public global:GlobalService,
    private finService: FinanceService) {
      this.acciones = global.acciones;
     }

  ngOnInit(): void {
    //console.log(this.global.get_login(), this.global.get_username())
    //get_base de datos
    this.actualizar_precios();
    this.calcularTotal();
  }
  public getData()
  {
    this.calcularTotal();
    return this.acciones;
  }

  public calcularTotal()
  {
    this.rentabilidad_total = 0;
    this.acciones.forEach(element => {
      this.rentabilidad_total += element.precio_venta-element.precio_compra
    });
    return this.rentabilidad_total;
  }

  actualizar_precios(){
    this.acciones.forEach(elem => {
      this.finService.get_cotizacion(elem.compania).then(r =>{
        elem.precio_venta = r.c;
      })
    })
  }

}
