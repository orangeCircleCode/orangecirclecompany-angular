import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copywriting',
  templateUrl: './copywriting.component.html',
  styleUrls: ['./copywriting.component.scss']
})
export class CopywritingComponent implements OnInit {
  title: string = 'Copywriting'
  description: string = 'Words and Language is the basis of all commucation'
  constructor() { }

  ngOnInit() {
  }

}
