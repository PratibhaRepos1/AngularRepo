import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularTesting');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('angularTesting app is running!');
  // });
  it('should have a title of type <h3>', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('h3');
    expect(titleElement).toBeTruthy();
  });
});
