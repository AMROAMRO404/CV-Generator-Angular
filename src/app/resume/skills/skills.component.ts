import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/cv';
import { PassingCVService } from 'src/app/passing-cv.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private cvServiece: PassingCVService) {
  }
  cv: CV;
  ngOnInit(): void {
    this.cv = this.cvServiece.getCV();
  }

}
