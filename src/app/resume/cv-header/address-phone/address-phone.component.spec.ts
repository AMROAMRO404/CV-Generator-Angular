import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPhoneComponent } from './address-phone.component';

describe('AddressPhoneComponent', () => {
  let component: AddressPhoneComponent;
  let fixture: ComponentFixture<AddressPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
