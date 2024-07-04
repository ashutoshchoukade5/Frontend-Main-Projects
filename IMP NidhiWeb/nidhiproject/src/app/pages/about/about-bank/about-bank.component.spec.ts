import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBankComponent } from './about-bank.component';

describe('AboutBankComponent', () => {
  let component: AboutBankComponent;
  let fixture: ComponentFixture<AboutBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
