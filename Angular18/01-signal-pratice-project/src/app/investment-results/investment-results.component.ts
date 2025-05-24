import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

private investmentService = inject(InvestmentService);

// get results() {
//   return this.investmentService.resultData;
// }

  //using signal

  // 1 way
  results = computed(() => this.investmentService.resultData());

 // 2 way
  //results = this.investmentService.resultData.asReadonly();
}

//  results = input<{
  //     year: number,
  //     interest: number,
  //     valueEndOfYear: number,
  //     annualInvestment: number,
  //     totalInterest: number,
  //     totalAmountInvested: number 
  //   }[]>()

//  @Input() results?: {
//       year: number,
//       interest: number,
//       valueEndOfYear: number,
//       annualInvestment: number,
//       totalInterest: number,
//       totalAmountInvested: number 
//     }[];
//}