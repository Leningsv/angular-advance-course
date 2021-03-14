import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RouterMedicoComponent} from './router-medico.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';

class FakeRouter {
  public navigate(params): any {
    return Promise.resolve();
  }
}

class FakeActivatedRoute {
  // public params: Observable<any> = of();

  private _subject = new Subject();
  public get subject(): Observable<any> {
    return this._subject.asObservable();
  }

  public push(value: any): void {
    this._subject.next(value);
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: ActivatedRoute, useClass: FakeActivatedRoute}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should to redirect save medico', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');
    component.saveMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('set new medico id', () => {
    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({id: 'nuevo'});
    expect(component.id).toBe('nuevo');
  });
});
