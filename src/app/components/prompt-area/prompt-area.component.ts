import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prompt-area',
  templateUrl: './prompt-area.component.html',
  styleUrls: ['./prompt-area.component.css']
})
export class PromptAreaComponent implements OnInit {

  ngOnInit(): void {}

  constructor(){}
  
  public tokens: {id: number, text: string}[] = [
    { id: 0, text: "hello"},
    { id: 1, text: "there"},
    { id: 2, text: "taco"},
    { id: 3, text: "pizza"},
  ];

  removeKeyword(event: any) {
    console.log("[Output-area::removeKeyword() @ event.id] -", event.id)
    this.tokens.splice(event.id, 1);
  }
}
