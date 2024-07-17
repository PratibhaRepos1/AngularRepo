import { Component, EventEmitter, Input, Output, computed, input, output  } from '@angular/core';
import { User } from './user.model';



// another approch type vs interface

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

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
