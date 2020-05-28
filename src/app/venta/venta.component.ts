import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { Operacion } from '../operacion';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

  acciones = [
    {id: "ASDIVAJWEJ", compania: "REPSOL", n_acciones: 100, precio_compra: 12.50, precio_venta: 13.00},
    {id: "IOVAIERNBF", compania: "IBERDROLA", n_acciones: 150, precio_compra: 18.50, precio_venta: 20.00},
    {id: "BIOWEROENF", compania: "AMAZON", n_acciones: 300, precio_compra: 120.50, precio_venta: 150.00},
    {id: "VIQPENURQO", compania: "APPLE", n_acciones: 10, precio_compra: 95.50, precio_venta: 90.00}
  ];

  reloj:number=0;
  crono:Subscription;

  public operacion:Operacion;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.operacion = new Operacion();
    this.operacion.tipo = 2;

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
