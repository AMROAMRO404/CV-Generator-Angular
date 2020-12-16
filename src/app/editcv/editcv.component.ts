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
      this.cvObject = JSON.parse(JSON.stringify(e));
      this.fName.setValue(this.cvObject.fName)
      this.lName.setValue(this.cvObject.lName)
      this.address.setValue(this.cvObject.address)
      this.phone.setValue(this.cvObject.phone)
      this.email.setValue(this.cvObject.email)
      this.linkedIn.setValue(this.cvObject.linkedIn)
      this.socialMedia.setValue(this.cvObject.socialMedia)
      this.objective.setValue(this.cvObject.objective)
      this.cvFormUpdate.setControl('experiences', this.setExistingExperiences(this.cvObject.experiences))
      this.cvFormUpdate.setControl('educations', this.setExistingEducations(this.cvObject.educations))
      this.cvFormUpdate.setControl('skills', this.setExistingList(this.cvObject.skills))
      this.cvFormUpdate.setControl('languges', this.setExistingList(this.cvObject.languges))
      this.cvFormUpdate.setControl('certifications', this.setExistingList(this.cvObject.certifications))
    })
  }
  setExistingExperiences(expSet: any[]): FormArray {
    const formArray = new FormArray([])
    expSet.forEach(element => {
      formArray.push(this.fb.group({
        dateStart: [element.dateStart, [Validators.required]],
        dateEnd: [element.dateEnd, [Validators.required]],
        jopTitle: [element.jopTitle, [Validators.required]],
        companyName: [element.companyName, [Validators.required]],
        description: [element.description, [Validators.required]]
      }))
    });
    return formArray;
  }
  setExistingEducations(eduSet: any[]): FormArray {
    const formArray = new FormArray([])
    eduSet.forEach(element => {
      formArray.push(this.fb.group({
        monthYear: [element.monthYear, [Validators.required]],
        degree: [element.degree, [Validators.required]],
        school: [element.school, [Validators.required]],
        description: [element.description, [Validators.required]]
      }))
    });
    return formArray;
  }
  setExistingList(listSet: any[]): FormArray {
    const formArray = new FormArray([])
    listSet.forEach(element => {
      formArray.push(this.fb.control(
        element
      ))
    });
    return formArray;
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
        this.cvServiece.editMyCV(this.cvFormUpdate);
        this.router.navigate(['/form']);
        alert("your CV was updated ... ")
      }
    }
  }

  //delete methodes
  deleteExperience(index) {
    let control = this.cvFormUpdate.controls.experiences as FormArray;
    control.removeAt(index);
  }
  deleteEducation(index) {
    let control = this.cvFormUpdate.controls.educations as FormArray;
    control.removeAt(index);
  }
  deleteSkill(index) {
    let control = this.cvFormUpdate.controls.skills as FormArray
    control.removeAt(index);
  }
  deleteLanguage(index) {
    let control = this.cvFormUpdate.controls.languages as FormArray
    control.removeAt(index);
  }
  deleteCertification(index) {
    let control = this.cvFormUpdate.controls.certifications as FormArray
    control.removeAt(index);
  }

  //add methodes
  addExperience() {
    let exps = this.cvFormUpdate.controls.experiences as FormArray;
    exps.push(this.fb.group({
      dateStart: ['', [Validators.required]],
      dateEnd: ['', [Validators.required]],
      jopTitle: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      description: ['', [Validators.required]]
    }));
  }
  addEducation() {
    let edus = this.cvFormUpdate.controls.educations as FormArray;
    edus.push(this.fb.group({
      monthYear: ['', [Validators.required]],
      degree: ['', [Validators.required]],
      school: ['', [Validators.required]],
      description: ['', [Validators.required]]
    }));
  }
  addSkills() {
    //this.skills.push(new FormControl('', [Validators.required]));
    let skills = this.cvFormUpdate.controls.skills as FormArray;
    skills.push(this.fb.control(
      ['']
    ))
  }
  addLanguges() {
    //this.languges.push(new FormControl('', [Validators.required]));
    //this.certifications.push(new FormControl('', [Validators.required]));
    let languges = this.cvFormUpdate.controls.languges as FormArray;
    languges.push(this.fb.control(
      ['']
    ))
  }
  addCandC() {
    //this.certifications.push(new FormControl('', [Validators.required]));
    let certifications = this.cvFormUpdate.controls.certifications as FormArray;
    certifications.push(this.fb.control(
      ['']
    ))
  }

}
