import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarteraComponent } from './cartera/cartera.component';


const routes: Routes = [
  {path:'',redirectTo:'/cartera',pathMatch:'full'},
  {path:'cartera',component:CarteraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
