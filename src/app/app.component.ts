import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GlobalService } from './services/global/global.service';
import { MatDialog } from '@angular/material/dialog';
import { FirestoreService } from './services/firestore/firestore.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mi cartera de acciones';
  name:string;
  password:string;

  constructor(public router: Router, private route: ActivatedRoute, public dialog: MatDialog,
    public global: GlobalService, public firestore: FirestoreService){
  }

  ngOnInit(){
    this.router.navigate(['']);
    if(!this.global.login){
      this.openDialog();
    }
    else{
      this.router.navigate(['cartera']);
    }
  }

  openDialog(){
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      data: {name: this.name, password: this.password}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined || result.name === undefined || result.password === undefined) {
        this.openDialog();
      }
      else this.login(result.name, result.password)
    });
  }

  login(user:string, pass:string){
    let expresion = /DEPI\d+/;
    let usr = user.match(expresion)
    if(pass == "2020" && usr != null && usr[0] == usr.input){
        this.firestore.login(user).subscribe(data =>{
          //console.log(data);
          if(data.length <= 0){
            this.global.usr.nombre = user;
            this.firestore.create_user();
              
            this.global.login = true;
            this.router.navigate(['cartera']);
          }
          else{
            this.global.usr = data[0];
          
            //console.log(this.global.usr)
            this.global.login = true;
            this.router.navigate(['cartera']);
          }
          
        });
    }
    else this.openDialog();
  }
}
