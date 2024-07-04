import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGallaryComponent } from './about-gallary.component';

describe('AboutGallaryComponent', () => {
  let component: AboutGallaryComponent;
  let fixture: ComponentFixture<AboutGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGallaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
