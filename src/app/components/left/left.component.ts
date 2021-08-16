import { Component, OnInit } from '@angular/core';
import { FibonacciService } from 'src/app/services/fibonacci.service'

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {

  fibonacciValue: number = 1;

  constructor(private fibonacciService: FibonacciService) { }

  ngOnInit(): void {
  }

  calculate(){
    this.fibonacciValue = this.fibonacciService.nextPosition();
  }

}
