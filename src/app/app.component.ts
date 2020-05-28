import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mi cartera de acciones';
  login = false;
  name:string;
  password:string;

  constructor(public router: Router, private route: ActivatedRoute, public dialog: MatDialog){
  }

  ngOnInit(){
    this.router.navigate(['']);
    if(!this.login){
      this.openDialog();
    }
    else{
      this.router.navigate(['cartera']);
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      data: {name: this.name, password: this.password}
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result == undefined || !this.login_check(result.name, result.password)){
        this.openDialog();
      }
      else{
        this.name = result.name;
        this.login = true;
        console.log(this.name);
        this.router.navigate(['cartera']);
      }
      
    });
  }

  login_check(user:string, pass:string):boolean{
    let expresion = /DEPI\d+/;
    let usr = user.match(expresion)
    if(pass == "2020" && usr != null && usr[0] == usr.input){
      //console.log(usr);
      return true;
    } 
    else return false;
  }
}
