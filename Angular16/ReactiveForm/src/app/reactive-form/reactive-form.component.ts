import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';


// Custom validator for password confirmation


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;
  confirmEqualValidator: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{10,12}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.confirmEqualValidator.validate.bind(this.confirmEqualValidator)]]
    });
  }

  // Helper function to check for error conditions
  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    console.log('form Control name: ' + control);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  // Helper function to display error messages
  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    

    if (control?.errors) {
      if (control.errors['required']) {
        return 'This field is required.';
      }

      if(control.errors['email']) {
        return 'Enter a valid email address, e.g., john@example.com';
      }

      if (control.errors['pattern']) {
        return 'Phone number must be minimum 10 digits and maximum 12 digits in length.';
      }

      if (control.errors['minlength']) {
        return 'Password must be at least 6 characters.';
      }

      if (control.errors['passwordsNotMatch']) {
        return 'Password mismatch.';
      }
    }

    return '';
  }
}
