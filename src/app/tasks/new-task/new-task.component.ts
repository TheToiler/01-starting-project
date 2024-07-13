import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type newTaskInterface } from '../tasks.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewtaskComponent {
  userId = input.required<string>();
  close = output<void>()
  newTask = signal<newTaskInterface>({title: '', summary: '', dueDate: ''});


  constructor(private tasksService: TasksService) {}
  onCancelNewTask() {
    this.close.emit()
  }

  onSubmitNewTask() {
    this.tasksService.newTask(this.userId(), this.newTask())
    this.close.emit()
  }
}
