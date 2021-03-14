import {Routes} from '@angular/router';
import {HospitalComponent} from '../../02-intermidial/hospital/hospital.component';
import {MedicosComponent} from '../../02-intermidial/spies/medicos.component';
import {IncrementadorComponent} from '../../02-intermidial/incremental/incrementador.component';

export const ROUTES: Routes = [
  {path: 'hospital', component: HospitalComponent},
  {path: 'medico/:id', component: MedicosComponent},
  {path: '**', component: IncrementadorComponent}
];
