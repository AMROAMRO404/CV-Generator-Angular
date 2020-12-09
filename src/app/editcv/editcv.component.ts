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

  constructor(private router: Router, private fb: FormBuilder, private cvServiece: PassingCVService, private http: HttpClient) { }
  form: FormComponent;

  cv: CV;
  cvId = localStorage.getItem('ID')
  cvObject: any;
  getTheCVToEdit() {
    this.http.get(`http://localhost:3000/${this.cvId}`).subscribe(e => {
      console.log("the data from database : ")
      this.cvObject = JSON.parse(JSON.stringify(e));
      this.cv = this.cvObject;
      console.log(this.cv)
    })

  }



}
