import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./task/new-task/new-task.component";
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true} ) userId!: string;
  @Input({ required: true }) name!: string;
  isAddTask: boolean = false;

  constructor(private TaskService: TaskService){}

  get selectUser(){
    return this.TaskService.getUserTasks(this.userId);
  }

  isAdd(){
    this.isAddTask = true;
  }

  isClose(isAddTask: boolean){
    this.isAddTask = isAddTask;
  }

  addData(obj: {title: string, summary: string, dueDate: string }){
    this.TaskService.addUserTask(obj,this.userId)
    this.isAddTask = false;
  }

  complete(id: string){
    this.TaskService.removeTask(id);
  }
}
