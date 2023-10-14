import { Component } from '@angular/core';
import Task from '../common/task';
import TaskList from '../common/taskList';


@Component({
  selector: 'app-task-list',
  template: 
  `<p>task-list works!</p>
  <div *ngFor="let item of [1,2,3]">
      <span>HELLO</span>
  </div>`,
  styleUrls: ['./task-list.component.css']
})


export class TaskListComponent{
    list = new TaskList([new Task ("EXE"), new Task ("GEX")]);
}
