import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-router-medico',
  templateUrl: './router-medico.component.html',
  styleUrls: ['./router-medico.component.scss']
})
export class RouterMedicoComponent implements OnInit {
  public id: string;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  public saveMedico(): void {
    this._router.navigate(['medico', '123']);
  }
}
