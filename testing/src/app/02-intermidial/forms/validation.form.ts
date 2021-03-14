import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export class ValidationForm {
  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

}
