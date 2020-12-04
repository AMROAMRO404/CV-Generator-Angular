import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/cv';
import { PassingCVService } from 'src/app/passing-cv.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(private cvServiece: PassingCVService) {
  }
  cv: CV;
  ngOnInit(): void {
    this.cv = this.cvServiece.getCV();

  }

}
