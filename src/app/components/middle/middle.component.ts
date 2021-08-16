import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit {

  showImage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }

}
