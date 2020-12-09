import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CV } from './cv';

@Injectable({
  providedIn: 'root'
})
export class PassingCVService {

  constructor(private http: HttpClient) { }
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

  cvObject: any;
  cvId = localStorage.getItem('ID');
  getCVfromAPI() {
    if (this.cvId) {
      this.http.get(`http://localhost:3000/${this.cvId}`).subscribe(e => {
        if (e) {
          this.cvObject = JSON.parse(JSON.stringify(e));
          this.cv = new CV(
            this.cvId,
            this.cvObject.fName,
            this.cvObject.lName,
            this.cvObject.phone,
            this.cvObject.address,
            this.cvObject.email,
            this.cvObject.linkedIn,
            this.cvObject.socialMedia,
            this.cvObject.objective,
            this.cvObject.experiences,
            this.cvObject.educations,
            this.cvObject.skills,
            this.cvObject.languges,
            this.cvObject.certifications
          );
          this.addCV(this.cv);

        }
        else {
          alert("you dont have a cv yet!")
        }
      })
    }
    else {
      alert("you dont have a cv yet!")
    }

  }
}
