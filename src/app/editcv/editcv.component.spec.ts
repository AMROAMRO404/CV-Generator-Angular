import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcvComponent } from './editcv.component';

describe('EditcvComponent', () => {
  let component: EditcvComponent;
  let fixture: ComponentFixture<EditcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
