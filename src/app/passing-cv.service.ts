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
  generateID() {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // Pick characers randomly
    let str = '';
    for (let i = 0; i < 10; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return str;
  }
}
