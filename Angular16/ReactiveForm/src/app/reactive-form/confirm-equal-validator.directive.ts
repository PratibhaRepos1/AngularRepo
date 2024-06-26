import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[confirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator {
  @Input() confirmEqualValidator: string = '';

  validate(control: AbstractControl): ValidationErrors | null {
    const controlToCompare = control.parent?.get(this.confirmEqualValidator);

    if (controlToCompare && controlToCompare.value !== control.value) {
      return { 'notEqual': true };
    }

    return null;
  }
}
