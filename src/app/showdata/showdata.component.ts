import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  constructor() { }
  @Input() item: any;
  ngOnInit(): void {
  }

}
