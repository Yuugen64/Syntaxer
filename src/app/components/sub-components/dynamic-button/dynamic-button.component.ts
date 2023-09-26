import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.css']
})
export class DynamicButtonComponent implements OnInit {
  
  //For dynamically swapping out the icons on the buttons using a dedicated CSS class in the icon area
  @Input() iconClass: string = "";
  
  constructor(){}

  ngOnInit(): void {}


}
