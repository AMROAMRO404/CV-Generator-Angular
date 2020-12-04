import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators, FormArrayName } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  cvForm: FormGroup;
  field(field: any) {
    return this.cvForm.get(field);
  }

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
  addExperience() {
    let exps = this.cvForm.controls.experiences as FormArray;
    exps.push(this.fb.group({
      dateStart: [''],
      dateEnd: [''],
      jopTitle: [''],
      companyName: [''],
      description: ['']
    }));
  }
  addEducation() {
    let edus = this.cvForm.controls.educations as FormArray;
    edus.push(this.fb.group({
      monthYear: [''],
      degree: [''],
      school: [''],
      description: ['']
    }));
  }
  addSkills() {
    this.skills.push(new FormControl(''));
    console.log(this.skills.value);
  }
  addLanguges() {
    this.languges.push(new FormControl(''));
    console.log(this.languges.value);
  }
  addCandC() {
    this.certifications.push(new FormControl(''));
    console.log(this.cvForm.get('certifications').value);
  }

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
  constructor(private fb: FormBuilder) {
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


  cvData: any;
  PreviewData() {
    this.cvData = JSON.stringify(this.cvForm.value);
    console.log(this.cvData);
  }

  // loadApiData() {
  //   this.cvForm.patchValue({
  //     fName: 'Amro',
  //     lName: 'Amro',
  //     phone: '0562001656',
  //     address: 'Hebron-Dura',
  //     email: 'amro.amro1999@gmail.com',
  //     linkedIn: 'amro@linkedIn.com',
  //     socialMedia: 'amro797@yahoo.com',
  //     objective: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  //     experiences: {
  //       dateStart: '1/2/1999',
  //       dateEnd: '1/2/2000',
  //       jopTitle: 'programmer',
  //       companyName: 'Google',
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  //     },
  //     educations: {
  //       monthYear: 'Feb/2010',
  //       degree: 'phd',
  //       school: 'MIT',
  //       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
  //     },
  //   })
  // }

  // this.fb.group({
  //   monthYear: ['Feb/2010'],
  //   degree: ['phd'],
  //   school: ['MIT'],
  //   description: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.']
  // }),
  // this.fb.group({
  //   dateStart: ['1/2/1999'],
  //   dateEnd: ['1/2/2000'],
  //   jopTitle: ['programmer'],
  //   companyName: ['Google'],
  //   description: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.']
  // }),
  // cvForm = new FormGroup({
  //   fName: new FormControl(''),
  //   lName: new FormControl(''),
  //   phone: new FormControl(''),
  //   address: new FormControl(''),
  //   email: new FormControl(''),
  //   linkedIn: new FormControl(''),
  //   socialMedia: new FormControl(''),
  //   objective: new FormControl(''),
  //   experience: new FormGroup({
  //     dateStart: new FormControl(''),
  //     dateEnd: new FormControl(''),
  //     jopTitle: new FormControl(''),
  //     companyName: new FormControl(''),
  //     description: new FormControl('')
  //   }),
  //   education: new FormGroup({
  //     monthYear: new FormControl(''),
  //     degree: new FormControl(''),
  //     school: new FormControl(''),
  //     description: new FormControl('')
  //   }),

  // });




}
