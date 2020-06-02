import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { GlobalService } from '../services/global/global.service';
import { MatListOption } from '@angular/material/list';
import { Paquete } from '../paquete';
import { FinanceService } from '../services/finance/finance.service';
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  acciones = this.global.paquetes;
  paquete_seleccionado=[];
  importe: number;

  disable_confirm_btn = true;

  reloj:number=0;
  crono:Subscription;

  constructor(private router: Router, private route: ActivatedRoute, public global: GlobalService,
    private finService: FinanceService, private firestore: FirestoreService) { }

  ngOnInit(): void {

    /* Temporizador */
    this.crono=timer(0,1000).subscribe((e)=>{
      this.reloj=Date.now()
    })
  }

  ngOnDestroy()
  {
    this.crono.unsubscribe();  
  }

  public aceptar()
  {
    console.log(this.paquete_seleccionado[0].id)
    this.firestore.del_paquete(this.paquete_seleccionado[0].id);
    this.router.navigate(['cartera']);
  }

  public cancelar()
  {
    this.router.navigate(['cartera']);
  }

  public actualizarPaquete(a){
    //console.log(this.paquete_seleccionado[0].id);
    this.comprobar_venta();
  }

  public comprobar_venta(){
    if(this.paquete_seleccionado[0] != undefined && this.importe != undefined){
      this.finService.get_cotizacion(this.paquete_seleccionado[0].compania).then(r=>{
        if(this.importe > this.paquete_seleccionado[0].n_acciones * r.c){
          this.disable_confirm_btn = true;
          alert("No se puede vender un paquete a mayor precio que la cotización actual");
        }
        else{
          this.disable_confirm_btn = false;
        }
      })
    }
  }
}
