import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {

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
    let control = this.cvForm.controls.skills as FormArray;
    control.removeAt(index);
  }
  deleteLanguage(index) {
    let control = this.cvForm.controls.languges as FormArray;
    control.removeAt(index);
  }
  deleteCertification(index) {
    let control = this.cvForm.controls.certifications as FormArray;
    control.removeAt(index);
  }
  // addSkills() {
  //   let ss = this.cvForm.controls.skills as FormArray;
  //   ss.push(this.fb.group({
  //     skillName: [''],
  //   }));
  // }
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
    let control = this.cvForm.controls.skills as FormArray;
    control.push(
      this.fb.group({
        skillName: [''],
      })
    )
  }
  addLanguges() {
    let control = this.cvForm.controls.languges as FormArray;
    control.push(
      this.fb.group({
        languageName: [''],
      })
    )
  }
  addCandC() {
    let control = this.cvForm.controls.certifications as FormArray;
    control.push(
      this.fb.group({
        certificationName: [''],
      })
    )
  }
  addReferences() {
    let control = this.cvForm.controls.refernces as FormArray;
    control.push(
      this.fb.group({
        referncesName: [''],
      })
    )
  }
  constructor(private fb: FormBuilder) { }
  cvForm = this.fb.group({
    fName: ['', [Validators.required, Validators.minLength(3)]],
    lName: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.minLength(6)]],
    address: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.minLength(3)]],
    linkedIn: [''],
    socialMedia: [''],
    objective: ['', [Validators.required, Validators.minLength(3)]],
    experiences: this.fb.array([]),
    educations: this.fb.array([]),
    skills: this.fb.array([]),
    languges: this.fb.array([]),
    refernces: this.fb.array([]),
    certifications: this.fb.array([]),
  })
  loadApiData() {
    this.cvForm.patchValue({
      fName: 'Amro',
      lName: 'Amro',
      phone: '0562001656',
      address: 'Hebron-Dura',
      email: 'amro.amro1999@gmail.com',
      linkedIn: 'amro@linkedIn.com',
      socialMedia: 'amro797@yahoo.com',
      objective: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      experiences: {
        dateStart: '1/2/1999',
        dateEnd: '1/2/2000',
        jopTitle: 'programmer',
        companyName: 'Google',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      educations: {
        monthYear: 'Feb/2010',
        degree: 'phd',
        school: 'MIT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
    })
  }

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
