import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[equalTo]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EqualToValidatorDirective, multi: true }]
})
export class EqualToValidatorDirective implements Validator {
  @Input('equalTo') equalTo!: string;

  validate(control: AbstractControl): ValidationErrors | null {
    const toCompare = control.parent?.get(this.equalTo);
    if (toCompare && toCompare.value !== control.value) {
      return { equalTo: true };
    }
    return null;
  }
}
