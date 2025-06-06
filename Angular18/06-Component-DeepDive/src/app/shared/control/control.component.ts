import { AfterContentInit, afterNextRender, afterRender, AfterViewInit, Component, contentChild, ContentChild, ElementRef, HostBinding, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class:'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit  {
  //backward compatibility of angular versions
 // @HostBinding('class') className = 'control';

  label = input.required<string>();
  private el = inject(ElementRef);

  //@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  //using signal
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');


  ngAfterContentInit() {
    //...
  }

  constructor() {
    // afterRender(() => {
    //   console.log('afterRender');
    // });

    // afterNextRender(() => {
    //   console.log('afterNextRender');
    // })
  }
  onClick() {
    // console.log('Clicked'!);
    // console.log(this.el);
    console.log(this.control);
  }

}
