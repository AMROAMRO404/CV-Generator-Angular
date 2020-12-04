import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/cv';
import { PassingCVService } from 'src/app/passing-cv.service';

@Component({
  selector: 'app-address-phone',
  templateUrl: './address-phone.component.html',
  styleUrls: ['./address-phone.component.css']
})
export class AddressPhoneComponent implements OnInit {

  constructor(private cvServiece: PassingCVService) {
  }
  cv: CV;
  ngOnInit(): void {
    this.cv = this.cvServiece.getCV();
  }
}
