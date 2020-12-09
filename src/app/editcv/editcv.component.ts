import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CV } from '../cv';
import { FormComponent } from '../form/form.component';
import { PassingCVService } from '../passing-cv.service';

@Component({
  selector: 'app-editcv',
  templateUrl: './editcv.component.html',
  styleUrls: ['./editcv.component.css']
})
export class EditcvComponent implements OnInit {
  editForm: FormGroup;

  ngOnInit(): void {
    this.getTheCVToEdit()
  }
  //define the controlers
  fName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  lName = new FormControl('', [Validators.required, Validators.minLength(3)]);
  phone = new FormControl('', [Validators.required, Validators.minLength(6)]);
  address = new FormControl('', [Validators.required, Validators.minLength(3)]);
  email = new FormControl('', [Validators.required, Validators.minLength(3)]);
  linkedIn = new FormControl('');
  socialMedia = new FormControl('');
  objective = new FormControl('', [Validators.required, Validators.minLength(3)]);
  experiences = new FormArray([]);
  educations = new FormArray([]);
  skills = new FormArray([]);
  languges = new FormArray([]);
  certifications = new FormArray([]);


  cvFormUpdate: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private cvServiece: PassingCVService, private http: HttpClient) {
    this.cvFormUpdate = this.fb.group({
      fName: this.fName,
      lName: this.lName,
      phone: this.phone,
      address: this.address,
      email: this.email,
      linkedIn: this.linkedIn,
      socialMedia: this.socialMedia,
      objective: this.objective,
      experiences: this.experiences,
      educations: this.educations,
      skills: this.skills,
      languges: this.languges,
      certifications: this.certifications,
    })
  }
  //get the field
  field(field: any) {
    return this.cvFormUpdate.get(field);
  }


  cv: CV;
  cvId = localStorage.getItem('ID')
  cvObject: any;
  getTheCVToEdit() {
    this.http.get(`http://localhost:3000/${this.cvId}`).subscribe(e => {
      console.log("the data from database : ")
      this.cvObject = JSON.parse(JSON.stringify(e));
      this.cv = this.cvObject;
      console.log(this.cv)
      this.fName.setValue(this.cv.fName)
      this.lName.setValue(this.cv.lName)
      this.address.setValue(this.cv.address)
      this.phone.setValue(this.cv.phone)
      this.email.setValue(this.cv.email)
      this.linkedIn.setValue(this.cv.linkedIn)
      this.socialMedia.setValue(this.cv.socialMedia)
      this.objective.setValue(this.cv.objective)
    })

  }

  submit() {
    if (!(localStorage.getItem('ID'))) {
      alert("You still dont have a CV to update :) ")
    } else {
      if (confirm("Are you sure to update your old CV ?")) {
        this.cv = new CV(
          this.cvId,
          this.cvFormUpdate.value.fName,
          this.cvFormUpdate.value.lName,
          this.cvFormUpdate.value.phone,
          this.cvFormUpdate.value.address,
          this.cvFormUpdate.value.email,
          this.cvFormUpdate.value.linkedIn,
          this.cvFormUpdate.value.socialMedia,
          this.cvFormUpdate.value.objective,
          this.cvFormUpdate.value.experiences,
          this.cvFormUpdate.value.educations,
          this.cvFormUpdate.value.skills,
          this.cvFormUpdate.value.languges,
          this.cvFormUpdate.value.certifications
        );
        this.cvServiece.addCV(this.cv);
        this.http.put(`http://localhost:3000/update/${localStorage.getItem('ID')}`, this.cvFormUpdate.value).subscribe(e => {
          console.log("The CV was updated")
        })
        this.router.navigate(['/form']);
        alert("your CV was updated ... ")
      }

    }
    console.log(this.cvFormUpdate.value)
  }
}
