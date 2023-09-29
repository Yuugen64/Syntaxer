import { Component, Input, Output , EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-keyword-pill',
  templateUrl: './keyword-pill.component.html',
  styleUrls: ['./keyword-pill.component.css']
})
export class KeywordPillComponent implements OnInit {

  //Input for index catch to allow for Output emitting to removal function!
  @Input() index: number;
  @Output() removeEvent = new EventEmitter<any>();

  constructor(){}

  ngOnInit(): void {
    //console.log("[onInit:: Index Binding] - "+this.index);
  }

 
  removeKeyword(data: any) {

    let emitData: any = {
      id: this.index
    };

    console.log("[keyword-pill::removeKeyword $event] - ", data);
    console.log("[keyword-pill::removeKeyword this.index] - ", this.index);
    this.removeEvent.emit(emitData)
  }
}
