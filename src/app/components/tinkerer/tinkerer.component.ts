import { Component } from '@angular/core';

@Component({
  selector: 'app-tinkerer',
  templateUrl: './tinkerer.component.html',
  styleUrls: ['./tinkerer.component.css']
})
export class TinkererComponent {




public toggleTinkerer():void {
  //console.log("[Tinkerer::Show/Hide Tab] - CLICKED");
  /* 
  The default position for the menu is animated "out". 
  You then toggle the 'animateIn' to show or hide the menu.
  */

  const tinkererMenu = document.getElementById('tinkerer');
  tinkererMenu?.classList.toggle('animateIn');
}
}
