import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/cv';
import { PassingCVService } from 'src/app/passing-cv.service';

@Component({
  selector: 'app-certification-courses',
  templateUrl: './certification-courses.component.html',
  styleUrls: ['./certification-courses.component.css']
})
export class CertificationCoursesComponent implements OnInit {

  constructor(private cvServiece: PassingCVService) {
  }
  cv: CV;
  ngOnInit(): void {
    this.cv = this.cvServiece.getCV();
    console.log(this.cv.certifications);
  }
}
