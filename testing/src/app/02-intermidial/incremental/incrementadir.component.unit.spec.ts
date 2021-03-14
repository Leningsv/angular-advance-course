import {IncrementadorComponent} from './incrementador.component';

describe('Incremeentador component unit', () => {
  let component: IncrementadorComponent;
  beforeEach(() => component = new IncrementadorComponent());
  it('Can not pass to 100 the progress', () => {
    component.progreso = 50;
    component.cambiarValor(5);
    expect(component.progreso).toBe(55);
  });
});
