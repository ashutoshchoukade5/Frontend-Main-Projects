import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsbankingComponent } from './smsbanking.component';

describe('SmsbankingComponent', () => {
  let component: SmsbankingComponent;
  let fixture: ComponentFixture<SmsbankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsbankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsbankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
