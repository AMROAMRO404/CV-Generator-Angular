import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { PassingCVService } from '../passing-cv.service';
import { CV } from '../cv';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  allCV: any;
  cv: CV;
  allCVLength: number;
  constructor(private cvServiece: PassingCVService, private http: HttpClient) {
    this.http.get(`http://localhost:3000`).subscribe(e => {
      console.log("the data from database : ")
      console.log(e)
      this.allCV = e;
      this.allCVLength = this.allCV.length;
      console.log(this.allCV)

      console.log(localStorage.getItem('ID'))
      for (let i = 0; i < this.allCVLength; i++) {
        if (this.allCV[i].userId == localStorage.getItem('ID')) {
          this.cv = this.allCV[i];
          this.cvServiece.addCV(this.cv);
          console.log(this.cv)
          break;
        }
      }
    })
    //console.log(this.allCV)

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

