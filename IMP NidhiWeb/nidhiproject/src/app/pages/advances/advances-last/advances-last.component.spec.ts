import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancesLastComponent } from './advances-last.component';

describe('AdvancesLastComponent', () => {
  let component: AdvancesLastComponent;
  let fixture: ComponentFixture<AdvancesLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancesLastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancesLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
