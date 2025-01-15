import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({ required: true }) users!: {
    id: string,
    name: string,
    avatar: string
  }
  
  @Input({ required: true }) selected!: boolean;

  @Output() selectId = new EventEmitter();

  get avatarUrl(){
    return 'assets/'+this.users.avatar;
  }

  
  select(){
    this.selectId.emit(this.users.id)
  }
}
