import { Component } from '@angular/core';
import Task from '../_common/task';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})


export class TaskListComponent{
    task1 = new Task(1,"Executing Angular class") 
    task2 = new Task(2,"Executing lofi playlist") 
    task3 = new Task(3,"Generating Pomodoro Timer ") 
    task4 = new Task(4,"Fetching playlists") 
    
    tasks=[this.task1,this.task2, this.task3, this.task4];
}
