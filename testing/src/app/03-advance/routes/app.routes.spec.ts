import {ROUTES} from './app.routes';
import {MedicosComponent} from '../../02-intermidial/spies/medicos.component';

describe('main routes', () => {
  it('should to exits the route medico:id', () => {
    expect(ROUTES).toContain({
      path: 'medico/:id',
      component: MedicosComponent
    });
  });
});
