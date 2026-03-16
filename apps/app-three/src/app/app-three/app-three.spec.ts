import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppThree } from './app-three';

describe('AppThree', () => {
  let component: AppThree;
  let fixture: ComponentFixture<AppThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppThree],
    }).compileComponents();

    fixture = TestBed.createComponent(AppThree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
