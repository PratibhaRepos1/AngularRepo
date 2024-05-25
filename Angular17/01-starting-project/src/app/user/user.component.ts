import { Component, EventEmitter, Input, Output, computed, input, output  } from '@angular/core';

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// another approch type vs interface
interface User {
   id: string;
   avatar: string;
   name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
 

  @Output() select = new EventEmitter<string>();

  //select = output<string>(); //new angular17 feature: replacement of line 15
  

  // Below code using signal input function
  // avatar = input.required<string>();
  // name = input.required<string>();
  //imagePath = computed(() => '../../assets/users/' + this.avatar());

  get imagePath() {
    return '../../assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);

  }

}
