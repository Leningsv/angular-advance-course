import {MedicosComponent} from './medicos.component';
import {MedicosService} from './medicos.service';
import {from, of, throwError} from 'rxjs';


describe('MedicosComponent', () => {

  let component: MedicosComponent;
  const service = new MedicosService(null);
  beforeEach(() => {
    component = new MedicosComponent(service);

  });


  it('Init: Load component', () => {
    spyOn(service, 'getMedicos').and.callFake(() => {
      return from([['m1', 'm2', 'm3']]);
    });
    component.ngOnInit();
    expect(component.medicos.length).toBeGreaterThan(0);

  });

  it('add', () => {
    const spy = spyOn(service, 'agregarMedico').and.callFake(resp => {
      return of();
    });
    component.agregarMedico();
    expect(spy).toHaveBeenCalled();
  });

  it('add medico to array', () => {
    const medico = {id: 1, name: 'Juan'};
    const spy = spyOn(service, 'agregarMedico').and.returnValue(of(medico));
    component.agregarMedico();
    expect(component.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('fail addition, property equal to service error', () => {
    const myError = 'Add medico error';
    spyOn(service, 'agregarMedico').and.returnValue(throwError(myError));
    component.agregarMedico();
    expect(component.mensajeError).toBe(myError);
  });
  it('call to server for delete a medico', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'borrarMedico').and.returnValue(of());
    component.borrarMedico('1');
    expect(spy).toHaveBeenCalledWith('1');
  });
});
