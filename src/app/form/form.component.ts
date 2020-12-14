import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CV } from '../cv';
import { PassingCVService } from '../passing-cv.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
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

  //define the constructor and inject the service
  cvForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private cvServiece: PassingCVService, private http: HttpClient) {
    this.cvForm = this.fb.group({
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
    return this.cvForm.get(field);
  }
  //delete methodes
  deleteExperience(index) {
    let control = this.cvForm.controls.experiences as FormArray;
    control.removeAt(index);
  }
  deleteEducation(index) {
    let control = this.cvForm.controls.educations as FormArray;
    control.removeAt(index);
  }
  deleteSkill(index) {
    this.skills.removeAt(index);
  }
  deleteLanguage(index) {
    this.languges.removeAt(index);
  }
  deleteCertification(index) {
    this.certifications.removeAt(index)
  }

  //add methodes
  addExperience() {
    let exps = this.cvForm.controls.experiences as FormArray;
    exps.push(this.fb.group({
      dateStart: ['', [Validators.required]],
      dateEnd: ['', [Validators.required]],
      jopTitle: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      description: ['', [Validators.required]]
    }));
  }
  addEducation() {
    let edus = this.cvForm.controls.educations as FormArray;
    edus.push(this.fb.group({
      monthYear: ['', [Validators.required]],
      degree: ['', [Validators.required]],
      school: ['', [Validators.required]],
      description: ['', [Validators.required]]
    }));
  }
  addSkills() {
    this.skills.push(new FormControl('', [Validators.required]));
  }
  addLanguges() {
    this.languges.push(new FormControl('', [Validators.required]));
  }
  addCandC() {
    this.certifications.push(new FormControl('', [Validators.required]));
  }

  //when submit the data
  cvData: any;
  cv: CV;
  cvId: any;
  submit() {
    if (localStorage.getItem('ID')) {
      alert("You alredy have a CV, you can delete or udate it !")
      this.router.navigate(['/landing-page']);
      this.cvServiece.addCV(this.cv);
    } else {
      this.cvId = this.cvServiece.generateID();
      localStorage.setItem('ID', this.cvId);
      this.cv = new CV(
        this.cvId,
        this.cvForm.value.fName,
        this.cvForm.value.lName,
        this.cvForm.value.phone,
        this.cvForm.value.address,
        this.cvForm.value.email,
        this.cvForm.value.linkedIn,
        this.cvForm.value.socialMedia,
        this.cvForm.value.objective,
        this.cvForm.value.experiences,
        this.cvForm.value.educations,
        this.cvForm.value.skills,
        this.cvForm.value.languges,
        this.cvForm.value.certifications
      );
      this.cvServiece.addCV(this.cv);
      this.cvServiece.postForm(this.cvId, this.cvForm);
    }

  }
  cvObject: any;
  goToMyCV() {
    this.cvServiece.loadApiData(this.cvId, this.cvObject, this.cvServiece, this.router);
  }


  deleteMyCV() {
    if (!(localStorage.getItem('ID'))) {
      alert("You still dont have a CV to delete :) ")
    } else {
      if (confirm("Are you sure to delete your old CV ?")) {
        this.cvServiece.deleteMyCV();
        this.router.navigate(['/landing-page']);
        alert("your CV was deleted ... ")
        localStorage.clear()
      }

    }
  }

  goToEditComponent() {
    if (!(localStorage.getItem('ID'))) {
      alert("You still dont have a CV to update :) ")
    }
    else {
      this.router.navigate(['/editcv']);
    }
  }
}
