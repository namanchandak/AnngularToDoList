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
    imports: [NgFor, TodoItemComponent, AddTodoComponent, NgIf,]
})
export class TodosComponent {
  todos:Todo[];
  localItem : string;
  constructor()
  {
    try {
      this.localItem = localStorage.getItem("todos");
    
      if (this.localItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    } catch (error) {
      // Handle the error here
      console.error('Error while working with localStorage: todos not exist', error);
    
      // You can provide a default value or take other appropriate actions
      this.todos = [];
    }
    
    
    
  }
  deleteTodo(todo : Todo)
    {
      console.log(todo)
      const index = this.todos.indexOf(todo)
      this.todos.splice(index, 1)
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
    AddTodo(todo : Todo)
    {
      console.log(todo)
      this.todos.push(todo)
      localStorage.setItem("todos", JSON.stringify(this.todos));

    }
    toggleTodo(todo : Todo)
    {
      const index = this.todos.indexOf(todo)
      this.todos[index].active = ! this.todos[index].active;
      localStorage.setItem("todos", JSON.stringify(this.todos));

    }
}
