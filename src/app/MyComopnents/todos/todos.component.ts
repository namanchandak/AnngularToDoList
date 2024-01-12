import { Component } from '@angular/core';
import { Todo } from "../../Todo";
import {NgFor, NgForOf} from "@angular/common";


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:Todo[];
  constructor()
  {
    this.todos = [
      {
        sno:2, 
        title:"tit 1",
        desc:" info",
        active:true
      },
      {
        sno:2, 
        title:"tit2",
        desc:" info",
        active:true
      },
      {
        sno:3, 
        title:"tit3",
        desc:" info",
        active:true
      },
    ]
  }
}
