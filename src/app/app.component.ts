import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi primera app en Angular ';
  public counter: number = 10;

  changeCounter(value: number): void {
    this.counter += value;
  }

  public reset(): void {
    this.counter = 10;
  }

}
