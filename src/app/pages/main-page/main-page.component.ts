import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  @Output() mainToTinkerer = new EventEmitter<any>();

  passToTinkerer() {
    console.log("[Main Page] - Data received from shroud!");
    this.mainToTinkerer.emit("[Main Page]-Shroud clicked pls close tinkerer");
  }
}
