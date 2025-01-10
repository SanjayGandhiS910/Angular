import { Component, Input, signal, computed, input, output, 
  Output,EventEmitter
 } 
 from '@angular/core';

@Component({
  selector: 'app-user',
  imports:[],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({ required: true }) user!: {
    id: number;
    name: string,
    url: string
  }
  @Output() selectId = new EventEmitter();
  
  select(){
    this.selectId.emit(this.user.id);
  }

}

// url = input.required()
// name = input.required()

// var index = Math.floor(Math.random() * DUMMY_User.length)
// selectUser = signal(DUMMY_User[index]);
  // url = computed( () => this.selectUser().url)
  // // get url(){
  // //   return this.selectUser.url
  // // }

  // select(){
  //   this.selectUser.set(DUMMY_User[index]);
  //   index = Math.floor(Math.random() * DUMMY_User.length)
  //   console.log(this.selectUser().name)
  // }