import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { PassingCVService } from '../passing-cv.service';

@Component({
  selector: 'app-editcv',
  templateUrl: './editcv.component.html',
  styleUrls: ['./editcv.component.css']
})
export class EditcvComponent implements OnInit {

  constructor(private router: Router, private fb: FormBuilder, private cvServiece: PassingCVService, private http: HttpClient) { }
  form: FormComponent;


  ngOnInit(): void {


  }

}
