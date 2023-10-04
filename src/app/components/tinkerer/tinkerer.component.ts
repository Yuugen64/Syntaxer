import { Component, Input, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-tinkerer',
  templateUrl: './tinkerer.component.html',
  styleUrls: ['./tinkerer.component.css']
})


export class TinkererComponent implements OnInit, OnDestroy {

  private eventsSubscription: Subscription;
  @Input() events = new Observable<void>;
  @Output() showShroud = new EventEmitter<string>();

  constructor(){}

  ngOnInit(){
    this.eventsSubscription = this.events.subscribe(() => this.toggleTinkerer());
  }
  
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

public toggleShroud():void {
  this.showShroud.emit("Show shroud!");
}

public toggleTinkerer():void {
  /* The default position for the menu is animated "out". You then toggle the 'animateIn' to show or hide the menu.*/
  const tinkererMenu = document.getElementById('tinkerer');
  console.log("(toggleTinkerer)");
  tinkererMenu?.classList.toggle('animateIn');
}

}
