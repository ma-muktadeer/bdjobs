import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SmsShow } from './sms-show';

describe('SmsShow', () => {
  let component: SmsShow;
  let fixture: ComponentFixture<SmsShow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsShow],
    }).compileComponents();

    fixture = TestBed.createComponent(SmsShow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
