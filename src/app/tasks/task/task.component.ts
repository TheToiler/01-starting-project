import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CardComponent } from '../../shared/card/card.component';
import { tasksInterface } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe, ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task= input.required<tasksInterface>()

  constructor(private tasksService: TasksService) {}

  clickCompleteTask() {
    this.tasksService.completeTask(this.task().id);
  }
}
