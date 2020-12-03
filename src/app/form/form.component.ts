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
  constructor(private fb: FormBuilder) { }
  cvForm = this.fb.group({
    fName: ['', [Validators.required, Validators.minLength(3)]],
    lName: ['Amro'],
    phone: ['0562001656'],
    address: ['Hebron-Dura'],
    email: ['amro.amro1999@gmail.com'],
    linkedIn: ['amro@linkedIn.com'],
    socialMedia: ['amro797@yahoo.com'],
    objective: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.'],
    experience: this.fb.group({
      dateStart: ['1/2/1999'],
      dateEnd: ['1/2/2000'],
      jopTitle: ['programmer'],
      companyName: ['Google'],
      description: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.']
    }),
    education: this.fb.group({
      monthYear: ['Feb/2010'],
      degree: ['phd'],
      school: ['MIT'],
      description: ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.']
    }),
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
      experience: {
        dateStart: '1/2/1999',
        dateEnd: '1/2/2000',
        jopTitle: 'programmer',
        companyName: 'Google',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
      education: {
        monthYear: 'Feb/2010',
        degree: 'phd',
        school: 'MIT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      },
    })
  }
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
