import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paquete } from '../paquete';
import {MatTable} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { GlobalService } from '../services/global/global.service';
import { FinanceService } from '../services/finance/finance.service';
import { FirestoreService } from '../services/firestore/firestore.service';
import { Subscriber, Subscription, timer } from 'rxjs';


@Component({
  selector: 'app-cartera',
  templateUrl: './cartera.component.html',
  styleUrls: ['./cartera.component.scss']
})
export class CarteraComponent implements OnInit {

  @ViewChild(MatTable,{static:true}) tabladatos: MatTable<any>;

  public displayedColumns: string[] = ['nombre', 'nacciones', 'pcompra','pventa','rentabilidad'];

  public rentabilidad_total: number;

  public s_paquetes: Subscription;

  reloj:number=0;
  crono:Subscription;

  constructor(public router: Router, public route: ActivatedRoute,
    private _snackBar: MatSnackBar, public global:GlobalService,
    private finService: FinanceService, private firestore: FirestoreService) {
      global.paquetes = [];
     }

  ngOnInit(): void {

    /* Temporizador */
    this.crono=timer(0,1000).subscribe((e)=>{ //Salta cada segundo (1000 ms)
      this.reloj--;
      if(this.reloj <= 0){
         this.actualizar_precios();
         this.reloj = 5 * 60; //5 min. * 60 s/min.
      }
      this.calcularTotal();
    });
    //console.log(this.global.get_login(), this.global.get_username())
    this.s_paquetes = this.firestore.get_paquetes().subscribe(data =>{
      this.global.paquetes = data;
      this.actualizar_precios();
      this.calcularTotal();
    }) 
  }

  ngOnDestroy(): void{
    this.s_paquetes.unsubscribe();
  }

  public getData()
  {
    return this.global.paquetes;
  }

  public calcularTotal()
  {
    this.rentabilidad_total = 0;
    this.global.paquetes.forEach(element => {
      this.rentabilidad_total += ((element.precio_venta - element.precio_compra) * element.n_acciones);
    });
  }

  actualizar_precios(){
    this.global.paquetes.forEach(elem => {
      this.finService.get_cotizacion(elem.compania).then(r =>{
        elem.precio_venta = r.c;
      })
    })
  }

}
