import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  submitted = false;
  formData: any = {};

  onSubmit(form: any) {
    this.submitted = true;
    this.formData = { ...form.value };
  }
}
