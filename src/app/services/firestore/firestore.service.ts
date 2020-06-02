import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/usuario';
import { Paquete } from 'src/app/paquete';
import { GlobalService } from '../global/global.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private fsUsuario:AngularFirestoreCollection<Usuario>;

  constructor(private firestore: AngularFirestore, public global: GlobalService) {
    this.fsUsuario=this.firestore.collection('users');
   }

  //login
  public login(usuario:string):Observable<Usuario[]>
  {
    return this.firestore.collection<Usuario>('users',ref=>ref.where('nombre','==',usuario)).valueChanges();
  }

  public create_user(){
    this.global.usr.id = this.firestore.createId();
    this.fsUsuario.doc(this.global.usr.id).set({... this.global.usr}).then(r =>{
       return this.global.usr.id;
      });
  }

  public get_paquetes():Observable<Paquete[]>{
    //console.log(this.global.usr);
    return this.fsUsuario.doc(this.global.usr.id).collection<Paquete>('paquetes').valueChanges();
  }

  public crear_paquete(paq:Paquete):Promise<string>
  {
    paq.id = this.firestore.createId();
    return this.fsUsuario.doc(this.global.usr.id).collection('paquetes').doc(paq.id).set({... paq}).then(r=>{
      this.global.paquetes.push(paq);
      return paq.id;
    });
  }

  public del_paquete (id:string){
    this.fsUsuario.doc(this.global.usr.id).collection('paquetes').doc(id).delete();
  }
}
