import { Component } from '@angular/core';
import { Todo } from "../../Todo";
import {NgFor, NgForOf, NgIf} from "@angular/common";
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [NgFor, TodoItemComponent, AddTodoComponent, NgIf]
})
export class TodosComponent {
  todos:Todo[];
  constructor()
  {
    this.todos = [
      {
        sno:1, 
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
  deleteTodo(todo : Todo)
    {
      console.log(todo)
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
    }
    AddTodo(todo : Todo)
    {
      console.log(todo)
      this.todos.push(todo)
    }
}
