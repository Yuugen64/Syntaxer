import { Component, Input, EventEmitter, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tinkerer',
  templateUrl: './tinkerer.component.html',
  styleUrls: ['./tinkerer.component.css']
})
export class TinkererComponent {

@Input() clickMessage = '';

public toggleTinkerer():void {
  /* The default position for the menu is animated "out". You then toggle the 'animateIn' to show or hide the menu.*/
  const tinkererMenu = document.getElementById('tinkerer');
  tinkererMenu?.classList.toggle('animateIn');
}
}
