import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

interface obj{
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  imports: [ DatePipe ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) tasks!: obj;
  @Output() complete = new EventEmitter<string>();
  @Output() isAddingTask = new EventEmitter();

  completed(){
    this.complete.emit(this.tasks.id);
  }

  
}
