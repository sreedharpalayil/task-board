import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

todoList = [];
completedList = [];
constructor(
  private todoService: TodoService
){}

ngOnInit(): void {
  this.todoService.getTodos().subscribe(
    list => {
      this.todoList = list;
    }
  );
}

markTodo(checkId){
  let checked = this.todoList.find(obj => obj.id === checkId);
  let exists = this.completedList.find(obj => obj.id === checkId);
  if(checked && !exists){
    this.completedList.push(checked);
  }
  this.todoList = this.todoList.filter(obj => obj.id !== checkId);
}

}


