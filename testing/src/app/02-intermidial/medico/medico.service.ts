import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(
    public httpClient: HttpClient
  ) { }

  public getMedicos(): Observable<any> {
    return this.httpClient.get('...');
  }
}
