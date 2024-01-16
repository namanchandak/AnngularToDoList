import { Routes } from '@angular/router';
import { TodosComponent } from './MyComopnents/todos/todos.component';
import { AboutComponent } from './MyComopnents/about/about.component';

const appRoutes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'about', component: AboutComponent },
];

export const routes: Routes = appRoutes;
