import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FibonacciService {

  private lastValue: number = 1;
  private lastLastValue: number = 1;

  constructor() { }

  nextPosition(){
    const aux = this.lastValue;
    this.lastValue += this.lastLastValue;
    this.lastLastValue = aux;
    return this.lastValue;
  }
}
