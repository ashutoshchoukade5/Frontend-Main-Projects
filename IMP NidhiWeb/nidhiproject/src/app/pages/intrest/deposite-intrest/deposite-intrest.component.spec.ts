import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositeIntrestComponent } from './deposite-intrest.component';

describe('DepositeIntrestComponent', () => {
  let component: DepositeIntrestComponent;
  let fixture: ComponentFixture<DepositeIntrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositeIntrestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositeIntrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
