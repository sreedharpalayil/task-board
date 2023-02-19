import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo.interface';

@Component({
  selector: 'app-actions-box',
  templateUrl: './actions-box.component.html',
  styleUrls: ['./actions-box.component.css']
})
export class ActionsBoxComponent {

  //required input of todos to complete
  //accepts only an array of type Todo
  @Input() todoList: Todo[];

  //the output event on todo check
  @Output() markTodoAction = new EventEmitter<any>();

  // This function will emit the check action for each todo
  checkTheBox(checkId, event){
    event.preventDefault();
    console.log('evnt', event);
    this.markTodoAction.emit(checkId);
  }

}
