import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from 'src/app/models/Todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

//array of todos to complete of type Todo
todoList: Todo[] = [];

//array of compledted todos of type Todo
completedList: Todo[] = [];

constructor(
  //inject the todo service
  private todoService: TodoService
){}

//oninit gets todos from TodoService
ngOnInit(): void {
  this.todoService.getTodos().subscribe(
    list => {
      this.todoList = list;
    }
  );
}

//marktodo action triggered from child actions-box
//checks completed list for duplicates using todo id
//removes a todo by id from todoList
//adds a todo by id to completedList
markTodo(checkId){
  let checked = this.todoList.find(obj => obj.id === checkId);
  let exists = this.completedList.find(obj => obj.id === checkId);
  if(checked && !exists){
    this.completedList.push(checked);
  }
  this.todoList = this.todoList.filter(obj => obj.id !== checkId);
}

}


