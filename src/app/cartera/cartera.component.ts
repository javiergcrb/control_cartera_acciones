import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paquete } from '../paquete';
import {MatTable} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { GlobalService } from '../services/global/global.service';


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
    private _snackBar: MatSnackBar, public global:GlobalService) {
      this.acciones = global.acciones;
     }

  ngOnInit(): void {
    //console.log(this.global.get_login(), this.global.get_username())
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
