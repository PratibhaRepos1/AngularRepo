import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-pipe-example',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe ],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})
export class PipeExampleComponent {
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
}
