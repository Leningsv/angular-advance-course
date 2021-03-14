import {Component, OnInit} from '@angular/core';
import {MedicoService} from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {
  public medicos: any[];

  constructor(
    private _medicoService: MedicoService
  ) {
  }

  ngOnInit(): void {
  }

  public helloMedico(name: string): string {
    return `Hi ${name}`;
  }

  public getMedicos(): void {
    this._medicoService.getMedicos().subscribe((medicos: any[]) => {

    });
  }
}
