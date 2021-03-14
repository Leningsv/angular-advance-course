import {ValidationForm} from './validation.form';
import {FormBuilder} from '@angular/forms';

describe('ValidationForm', () => {
  let component: ValidationForm;
  beforeEach(() => {
    component = new ValidationForm(new FormBuilder());
  });

  it('Create ValidationForm, email and password', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });
  it('Email required', () => {
    const emailControl = component.form.get('email');
    emailControl.setValue('');
    expect(emailControl.valid).toBeFalse();
  });
  it('Email valid', () => {
    const emailControl = component.form.get('email');
    emailControl.setValue('lenin@gmail.com');
    expect(emailControl.valid).toBeTruthy();
  });
});
