import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  public getMedicos(): any {
    return this.http.get('...')
      .pipe(map(resp => resp['medicos'] ));
  }

  public agregarMedico( medico: any ): any {
    return this.http.post('...', medico )
      .pipe(map( resp => resp['medico'] )) ;
  }

  public borrarMedico( id: string ): any {
    return this.http.delete('...' )
     .pipe(map( resp => resp['medico'] ));
  }


}
