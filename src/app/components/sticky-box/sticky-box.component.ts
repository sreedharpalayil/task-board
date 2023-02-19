import { Component, OnInit , Input} from '@angular/core';
import { Todo } from 'src/app/models/Todo.interface';

@Component({
  selector: 'app-sticky-box',
  templateUrl: './sticky-box.component.html',
  styleUrls: ['./sticky-box.component.css']
})
export class StickyBoxComponent {

  @Input() completed: Todo[];

}
