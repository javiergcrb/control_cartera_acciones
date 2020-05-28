import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteraComponent } from './cartera/cartera.component';
import { CompraComponent } from './compra/compra.component';


const routes: Routes = [
  {path:'',redirectTo:'/cartera',pathMatch:'full'},
  {path:'cartera',component:CarteraComponent},
  {path:'compra',component:CompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
