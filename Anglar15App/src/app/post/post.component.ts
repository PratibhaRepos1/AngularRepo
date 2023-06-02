import { Component, Input, EventEmitter, Output, OnInit,
OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy }
 from '@angular/core';

import { CrudService } from '../crud.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  dataNow:any;

  constructor(private crudService: CrudService) {
    console.log('constructor called before the 1st hook');
  }

  ngOnChanges() {
    console.log('1st hook ngOnChanges is called');
  }

  ngOnInit() {
    console.log('2nd hook ngOnInit is called', this.postImg);
    this.dataNow = this.crudService.getTime().toLocaleDateString();
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
