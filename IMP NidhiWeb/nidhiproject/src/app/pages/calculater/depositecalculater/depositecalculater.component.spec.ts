import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositecalculaterComponent } from './depositecalculater.component';

describe('DepositecalculaterComponent', () => {
  let component: DepositecalculaterComponent;
  let fixture: ComponentFixture<DepositecalculaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositecalculaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositecalculaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
