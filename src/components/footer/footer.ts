import { Component } from '@angular/core';


@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  text: string;

  constructor() {
    console.log('Hello FooterComponent Component');
    this.text = 'Hello World';
  }

}
