import { Component, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-keyword-pill',
  templateUrl: './keyword-pill.component.html',
  styleUrls: ['./keyword-pill.component.css']
})
export class KeywordPillComponent {

  @Output() removeEvent = new EventEmitter<any>();  

  removeKeyword(data: any) {

    let emitData: any = {
      id: 2,
      text: 'yo'
    };

    console.log("[keyword-pill::removeKeyword emit] - ", emitData);

    this.removeEvent.emit(emitData)
  }
}
