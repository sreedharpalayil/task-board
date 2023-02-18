import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo.interface';

@Component({
  selector: 'app-actions-box',
  templateUrl: './actions-box.component.html',
  styleUrls: ['./actions-box.component.css']
})
export class ActionsBoxComponent {

  @Input() todoList: Todo[];
  @Output() markTodoAction = new EventEmitter<any>();


  checkTheBox(checkId, event){
    event.preventDefault();
    console.log('evnt', event);
    this.markTodoAction.emit(checkId);
  }

}
