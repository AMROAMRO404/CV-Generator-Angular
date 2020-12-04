import { Injectable } from '@angular/core';
import { CV } from './cv';

@Injectable({
  providedIn: 'root'
})
export class PassingCVService {

  constructor() { }
  cv: CV;

  getCV() {
    return this.cv;
  }
  addCV(cv: CV) {
    this.cv = cv;
  }
}
