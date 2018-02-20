import { Component, Output } from '@angular/core';


@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  @Output()
  

  text: string;

  constructor() {
    
  }

}
