import { Component } from '@angular/core';
import { CV } from '../cv';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  cvObject: any;
  cv: CV;
  cvId = localStorage.getItem('ID')
  constructor(private http: HttpClient) {
    this.http.get(`https://cv-generatorserver.herokuapp.com/${this.cvId}`).subscribe(e => {
      console.log("the data from database : ")
      this.cvObject = JSON.parse(JSON.stringify(e));
      this.cv = this.cvObject;
      console.log(this.cv)
    })
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

