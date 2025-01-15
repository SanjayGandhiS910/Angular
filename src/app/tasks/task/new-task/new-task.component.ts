import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [ FormsModule ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter<{
   title: string,
   summary: string,
   dueDate: string 
  }>();
  enterTitle = '';
  enterSummary = '';
  enterDate = '';

  isClose(){
    this.close.emit()
  }

  onSubmited(){
    console.log("Sanjay");
    
    this.add.emit({
      title: this.enterTitle,
      summary: this.enterSummary,
      dueDate: this.enterDate 
    })
  }
}
