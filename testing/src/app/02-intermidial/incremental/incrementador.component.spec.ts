import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IncrementadorComponent} from './incrementador.component';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';


describe('Incremendator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;

  });

  it('Debe de mostrar la leyenda', () => {
    component.leyenda = 'Progreso de carga';
    fixture.detectChanges();  // Disparar la decteccion de cambios*/
    const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elem.innerHTML).toContain('Progreso de carga');
  });

  it('Show input progress value', () => {
    component.cambiarValor(5);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const elm = input.nativeElement;
      expect(elm.value).toBe('55');
    });
  });

  it('add and decrease to 5, button click event', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
    buttons[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);
    buttons[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  it('listen progress button click event', () => {
    const buttons = fixture.debugElement.queryAll(By.css('.btn-primary'));
    buttons[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    const elm = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elm.innerHTML).toContain(45);
  });
});
