import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './MyComopnents/todos/todos.component';
import { TodoItemComponent } from "./MyComopnents/todo-item/todo-item.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cwh-todo-list';
  constructor()
  {
    // setTimeout(() => {
    //   this.title = "change"
    // }, 2000);
  }

}
