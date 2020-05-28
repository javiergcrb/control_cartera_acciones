import { Component, OnInit } from '@angular/core';
import { Operacion } from '../operacion';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit {

  reloj:number=0;
  crono:Subscription;

  constructor(private router: Router, private route: ActivatedRoute) { }

  public operacion:Operacion;

  ngOnInit(): void {

    this.operacion = new Operacion();
    this.operacion.tipo = 1;
    this.operacion.i_total = 0;

    /* EJEMLO 1: Temporizador */
    this.crono=timer(0,1000).subscribe((e)=>{
      this.reloj=Date.now()
    })
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
