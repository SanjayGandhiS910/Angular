import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_Users } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [ HeaderComponent, UsersComponent, TasksComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectUser = DUMMY_Users;
  selectId!: string;

  get getName(): any{
    return this.selectUser.find((task)=> task.id == this.selectId);
  }

  select(id: string){
     this.selectId = id;
  }
}
