import { Component, Output, EventEmitter } from '@angular/core';
import Task from '../_common/task';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
    // decorator function marking the property as a way for data to go from the child to the parent
    // here a newTaskEvent will go from add-Task to tasklist component
    @Output() newTaskEvent = new EventEmitter<string>();

    addNewTask(value: string) {
        console.log("clicked");
        this.newTaskEvent.emit(value);
    }
}
