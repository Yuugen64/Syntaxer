import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shroud-component',
  templateUrl: './shroud-component.component.html',
  styleUrls: ['./shroud-component.component.css']
})
export class ShroudComponentComponent {

@Output() toggleEvent = new EventEmitter<any>();

sendToggleEvent() {
  this.toggleEvent.emit();
}
}
