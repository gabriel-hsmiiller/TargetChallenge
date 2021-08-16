import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {

  private values: number[] = [0,1,2,3,4,5,6,7,8,9,10];
  showValues: number[] = this.values;
  value: number = null;

  constructor() { }

  ngOnInit(): void {
  }

  filterValues(){
    const numValue = Number(this.value);
    if(this.value && numValue !== NaN && (numValue >= 0 && numValue <= 10)){
      this.showValues = this.values.filter(v => v === numValue);
    } else {
      this.showValues = this.values;
    }
  }

}
