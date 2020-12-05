import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { PassingCVService } from '../passing-cv.service';
import { CV } from '../cv';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  constructor(private cvServiece: PassingCVService) {
  }
  cv: CV;
  ngOnInit(): void {
    this.cv = this.cvServiece.getCV();
    console.log(this.cv);
  }
  // generatePDF() {
  //   var data = document.getElementById('htmlData');
  //   html2canvas(data).then(canvas => {
  //     // Few necessary setting options  
  //     var imgWidth = 208;
  //     var pageHeight = 295;
  //     var imgHeight = canvas.height * imgWidth / canvas.width;
  //     var heightLeft = imgHeight;
  //     const contentDataURL = canvas.toDataURL('image/png')
  //     let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
  //     var position = 0;

  //     pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  //     pdf.html(document.body)
  //     pdf.save('CV.pdf');
  //   });
  // }

}

