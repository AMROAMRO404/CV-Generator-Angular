
import { Injectable } from '@angular/core';
import { CV } from './cv';
import { HttpClient } from '@angular/common/http';

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

  postForm(cvId, form) {
    this.http.post(`http://localhost:3000/add/${cvId}`, form.value).subscribe(e => {
      console.log("data from database ....")
      console.log(e)
    })
  }
  editMyCV(cvFormUpdate) {
    this.http.put(`http://localhost:3000/update/${localStorage.getItem('ID')}`, cvFormUpdate.value).subscribe(e => {
      console.log("The CV was updated")
    })
  }

  deleteMyCV() {
    this.http.delete(`http://localhost:3000/delete/${localStorage.getItem('ID')}`).subscribe(e => {
      console.log("The CV was deleted")
    })
  }
  loadApiData(cvId, cvObject, cvServiece, router) {
    if (localStorage.getItem('ID')) {
      this.http.get(`http://localhost:3000/${localStorage.getItem('ID')}`).subscribe(e => {
        if (e) {
          cvObject = JSON.parse(JSON.stringify(e));
          this.cv = new CV(
            cvId,
            cvObject.fName,
            cvObject.lName,
            cvObject.phone,
            cvObject.address,
            cvObject.email,
            cvObject.linkedIn,
            cvObject.socialMedia,
            cvObject.objective,
            cvObject.experiences,
            cvObject.educations,
            cvObject.skills,
            cvObject.languges,
            cvObject.certifications
          );
          cvServiece.addCV(this.cv);
          router.navigate(['/resume']);
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
