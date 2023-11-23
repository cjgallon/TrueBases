/*
* Usando la extension llamada "Angula Snippets" tenemos acceso a diferentes snippets
* que facilitan la forma de hacer procesos repetitivos
*
* a-component crea los requisitos mínimos para hacer un component
*/


import { Component, } from '@angular/core';

//Transforma una clase en un componente
@Component({
  //Es el nombre que tendrá el componente en el html
  selector: 'app-counter',

  template: `<h3>Counter: {{counter}}</h3>
            <button (click)="changeCounter(+1)">+1</button>
            <button (click)="reset()">Reset</button>
            <button (click)="changeCounter(-1)">-1</button>`
})


export class CounterComponent {
  public counter: number = 10;

  changeCounter(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 10;
  }
}
