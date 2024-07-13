import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { type newTaskInterface, type tasksInterface } from './tasks.model'

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks: tasksInterface[] = DUMMY_TASKS;

    getUserTasks(id: string) {
        return this.tasks.filter((element) => element.userId === id)
    }

    completeTask(id: string) {
        this.tasks = this.tasks.filter((element) => element.id !== id)
    }

    newTask(userId: string, newTask: newTaskInterface) {
        this.tasks.unshift({id: new Date().getTime().toString(), userId: userId, title: newTask.title, summary: newTask.summary, dueDate: newTask.dueDate})
    }

}