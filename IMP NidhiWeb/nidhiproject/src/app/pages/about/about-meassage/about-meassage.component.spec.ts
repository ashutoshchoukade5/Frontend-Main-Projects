import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeassageComponent } from './about-meassage.component';

describe('AboutMeassageComponent', () => {
  let component: AboutMeassageComponent;
  let fixture: ComponentFixture<AboutMeassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeassageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
