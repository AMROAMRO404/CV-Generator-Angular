import { Component, OnInit } from '@angular/core';
import { CV } from 'src/app/cv';
import { PassingCVService } from 'src/app/passing-cv.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  constructor(private cvServiece: PassingCVService) {
  }
  cv: CV;

  ngOnInit(): void {
    this.cv = this.cvServiece.getCV();
  }
}
