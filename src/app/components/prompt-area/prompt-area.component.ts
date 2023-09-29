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
    { id: 0, text: "a"},
    { id: 1, text: "photo of"},
    { id: 2, text: "a mountain"},
    { id: 3, text: "at sunset"},
    { id: 4, text: "behind grassy fields"},
    { id: 5, text: "warm summer breeze"},
    { id: 6, text: "adventure"},
    { id: 7, text: "quest"},
    { id: 8, text: "realistic lighting"},
    { id: 0, text: "a"},
    { id: 1, text: "photo of"},
    { id: 2, text: "a mountain"},
    { id: 3, text: "at sunset"},
    { id: 4, text: "behind grassy fields"},
    { id: 5, text: "warm summer breeze"},
    { id: 6, text: "adventure"},
    { id: 7, text: "quest"},
    { id: 8, text: "realistic lighting"}
  ];

  removeKeyword(event: any) {
    console.log("[Output-area::removeKeyword() @ event.id] -", event.id)
    this.tokens.splice(event.id, 1);
  }
}
