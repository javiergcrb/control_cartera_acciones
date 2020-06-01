import { Component, OnInit } from '@angular/core';
import { Operacion } from '../operacion';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { FinanceService } from '../services/finance/finance.service';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';

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
    private finService: FinanceService) { }

  public operacion:Operacion;

  ngOnInit(): void {

    this.operacion = new Operacion();
    this.operacion.tipo = 1;
    this.operacion.i_total = 0;

    /* Temporizador */
    this.crono=timer(0,1000).subscribe((e)=>{
      this.reloj=Date.now()
    })
  }

  actualizar_precio(){
    if(this.operacion.compania != undefined){
      this.finService.get_cotizacion(this.operacion.compania).then(r=>{
        if(r.c>0){
          if(this.operacion.n_acciones > 0){
            this.operacion.i_total = this.operacion.n_acciones * r.c;
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

      
    //console.log(this.operacion.compania);
  }

  ngOnDestroy()
  {
    this.crono.unsubscribe();  
  }

  public aceptar()
  {/*
    if(this.id==0)
      this.firestoreService.createContacto(this.contacto);
    else
      this.firestoreService.UpdateContacto(this.contacto);
*/
    this.router.navigate(['cartera']);
  }

  public cancelar()
  {
    this.router.navigate(['cartera']);
  }

}
