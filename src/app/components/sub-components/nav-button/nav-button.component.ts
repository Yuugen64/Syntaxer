import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent implements OnInit {

  //For dynamically swapping out the icons on the buttons using a dedicated CSS class in the icon area
  @Input() iconClass: string = "";
  
  constructor(){}

  ngOnInit(): void {}
}
