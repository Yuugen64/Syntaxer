import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  //creates a new RxJS subject for us to iterate in the thread
  eventsSubject: Subject<void> = new Subject<void>();

  //the function we bind to our CHILD event @Output eventEmitter function() ".emit"
  emitEventToChild() {
    const shroudArea = document.getElementById('tinkererShroudArea');
    shroudArea?.classList.toggle('hide');
    this.eventsSubject.next(); //iterates the Subject
  }

  showShroud() {
    const shroudArea = document.getElementById('tinkererShroudArea');
    shroudArea?.classList.toggle('hide');
    console.log('(emitEventToChild) - should hide')
  }
}
