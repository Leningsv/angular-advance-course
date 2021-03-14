import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MedicosComponent} from './02-intermidial/spies/medicos.component';
import {HttpClientModule} from '@angular/common/http';
import { MedicoComponent } from './02-intermidial/medico/medico.component';
import { HospitalComponent } from './02-intermidial/hospital/hospital.component';
import {IncrementadorComponent} from './02-intermidial/incremental/incrementador.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ROUTES} from './03-advance/routes/app.routes';
import { NavbarComponent } from './03-advance/navbar/navbar.component';
import { RouterMedicoComponent } from './03-advance/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
