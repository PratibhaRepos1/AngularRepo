import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringInJSComponent } from './string-in-js.component';

describe('StringInJSComponent', () => {
  let component: StringInJSComponent;
  let fixture: ComponentFixture<StringInJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringInJSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringInJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
