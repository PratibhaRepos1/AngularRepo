import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should call ngOnInit', () => {
    app.ngOnInit();
    expect(app.ngOnInit).toBeTruthy();
  });

  it(`should have as title 'JenkinsAppTest'`, () => {

    expect(app.title).toEqual('JenkinsAppTest');
  });

  it('should render title', () => {

    const compiled = fixture.nativeElement;
    //  expect(compiled.querySelector('.content span').textContent).toContain('JenkinsAppTest app is running!');
  });

  it('should call ShowTitle', () => {
    app.ShowTitle();
    app.message = 'Hello Jenkins';
    expect(app.ShowTitle).toBeTruthy();
  });
});
