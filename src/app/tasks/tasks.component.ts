import { Component, input, computed, signal } from '@angular/core';

// import custom components
import { TaskComponent } from './task/task.component'
import { NewtaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';
import { selectedUserInterface, newTaskInterface } from './tasks.model'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewtaskComponent, ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',

})

export class TasksComponent {
  user = input<selectedUserInterface>();
  newTask: boolean = false;

  constructor(private tasksService: TasksService) {
    
  }

  get tasks() {
    return this.tasksService.getUserTasks(this.user()!.id)
  }
  
  onCompleteTask(id:string) {
    this.tasksService.completeTask(id)
  }

  onNewTask() {
    this.newTask = true;
  }

  onCloseNewTask() {
    this.newTask = false;
  }
}
