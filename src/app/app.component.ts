import { Component } from '@angular/core';
import { DemoComponent } from './demo/demo.component';
import { UserComponent } from './user/user.component';
import { DUMMY_User } from './dummy_user';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-root',
  imports: [DemoComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular';
  users = DUMMY_User;
  showImage = 1;

  get showImg(){
    return this.users.find( (index) => index.id === this.showImage)?.url!;
  }

  select(id: number){
    this.showImage = id;
  }
}
