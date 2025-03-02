import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystandaloneComponent } from './mystandalone.component';

describe('MystandaloneComponent', () => {
  let component: MystandaloneComponent;
  let fixture: ComponentFixture<MystandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MystandaloneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MystandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
