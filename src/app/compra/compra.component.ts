import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { FinanceService } from '../services/finance/finance.service';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { GlobalService } from '../services/global/global.service';
import { FirestoreService } from '../services/firestore/firestore.service';
import { Paquete } from '../paquete';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  reloj:number=0;
  crono:Subscription;
  precio:number=0;

  disable_confirm_btn = true;

  constructor(private router: Router, private route: ActivatedRoute,
    private finService: FinanceService, public global: GlobalService,
    private firestore: FirestoreService) { }

  public paquete:Paquete;

  mercado:string;
  symbols: string[] = [];
  selected:string;

  ngOnInit(): void {

    this.paquete = new Paquete();

    /* Temporizador */
    this.crono=timer(0,1000).subscribe((e)=>{
      this.reloj=Date.now();
    });
  }

  actualizar_companias(){
    this.symbols = [];
    this.selected = '';
    this.finService.get_symbols(this.mercado).then(r =>{
      r.forEach(s =>{
        this.symbols.push(s.symbol);
      });
    });
  }

  actualizar_precio(){
    if(this.paquete.compania != undefined){
      if(this.paquete.n_acciones == undefined || this.paquete.n_acciones <= 1) this.paquete.n_acciones = 1;
      this.finService.get_cotizacion(this.paquete.compania).then(r=>{
        if(r.c>0){
          if(this.paquete.n_acciones > 0){
            this.paquete.precio_compra = r.c;
          this.disable_confirm_btn = false;
          }
          else{
            this.disable_confirm_btn = true;
          }
        }
        else{
          this.disable_confirm_btn = true;
          alert("Nombre de compañía incorrecto");
        }
      })
    }
  }

  ngOnDestroy()
  {
    this.crono.unsubscribe();  
  }

  public aceptar(){
    this.firestore.crear_paquete(this.paquete);
    this.router.navigate(['cartera']);
  }

  public cancelar()
  {
    this.router.navigate(['cartera']);
  }

}
