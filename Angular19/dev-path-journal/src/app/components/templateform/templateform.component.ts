import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  imports: [CommonModule, FormsModule],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css'
})
export class TemplateformComponent {

  submit(form: NgForm) {
    console.log('Form Submitted: ', form.value);
  }
}
