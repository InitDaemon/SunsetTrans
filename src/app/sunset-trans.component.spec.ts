import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SunsetTransComponent } from './sunset-trans.component';

describe('SunsetTransComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        SunsetTransComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SunsetTransComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SunsetTrans'`, () => {
    const fixture = TestBed.createComponent(SunsetTransComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SunsetTrans');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SunsetTransComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('SunsetTrans app is running!');
  });
});
