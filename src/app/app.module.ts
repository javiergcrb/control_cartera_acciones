import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// USADOS PARA ROUTING:
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// GENERICOS DE MATERIAL:
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

// ELEMENTOS UI ESPECÍFICOS:
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';

// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { HttpClientModule } from "@angular/common/http";

import { CarteraComponent } from './cartera/cartera.component';
import { CompraComponent } from './compra/compra.component';
import { VentaComponent } from './venta/venta.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteraComponent,
    CompraComponent,
    VentaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,FlexLayoutModule,
    FormsModule,MatFormFieldModule, MatIconModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

    MatInputModule,MatSelectModule,
    MatButtonModule, MatListModule,
    MatCardModule, MatDialogModule,
    MatTableModule,MatBadgeModule,  MatExpansionModule,
    MatSnackBarModule,MatTooltipModule,MatToolbarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
