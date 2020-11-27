import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationCoursesComponent } from './certification-courses.component';

describe('CertificationCoursesComponent', () => {
  let component: CertificationCoursesComponent;
  let fixture: ComponentFixture<CertificationCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificationCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
