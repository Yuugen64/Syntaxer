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
  @Output() showShroud = new EventEmitter<void>();

  constructor(){}

  ngOnInit(){
    this.eventsSubscription = this.events.subscribe(() => this.toggleTinkerer());
  }
  
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

public toggleShroud():void {
  this.showShroud.emit();
}

public toggleTinkerer():void {
  /* The default position for the menu is animated* "out". 
  You then toggle the 'animateIn' to show or hide the menu.*/
  const tinkererMenu = document.getElementById('tinkerer');
  const tabIcon = document.getElementById('tabIcon');

  tinkererMenu?.classList.toggle('animateIn');
  tabIcon?.classList.toggle('flipped');
}

}
