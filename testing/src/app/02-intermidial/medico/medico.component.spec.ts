import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MedicoComponent} from './medico.component';
import {MedicosService} from '../spies/medicos.service';
import {HttpClientModule} from '@angular/common/http';

describe('MedicoComponent', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicosService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('return medico name', () => {
    const name = 'Lenin';
    const specResult = component.helloMedico(name);
    expect(specResult).toContain(name);
  });
});
