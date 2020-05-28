import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteraComponent } from './cartera/cartera.component';
import { CompraComponent } from './compra/compra.component';
import { VentaComponent } from './venta/venta.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'cartera',component:CarteraComponent},
  {path:'compra',component:CompraComponent},
  {path:'venta',component:VentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
