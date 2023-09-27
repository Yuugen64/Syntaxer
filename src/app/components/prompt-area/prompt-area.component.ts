import { Component } from '@angular/core';

@Component({
  selector: 'app-prompt-area',
  templateUrl: './prompt-area.component.html',
  styleUrls: ['./prompt-area.component.css']
})
export class PromptAreaComponent {

  tokens: {id: number, text: string}[] = [
    { id: 0, text: "hello"},
    { id: 1, text: "there"},
  ];
}
