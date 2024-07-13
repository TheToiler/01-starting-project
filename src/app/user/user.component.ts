import { Component, input, output, computed } from '@angular/core';

import { CardComponent } from "../shared/card/card.component";

interface selectedUserInterface {
  id: string,
  name: string,
  avatar: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent,],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class UserComponent {
  user = input.required<selectedUserInterface>()
  selected = input<boolean>(false);
  select = output<selectedUserInterface>()

  imagePath = computed(() => {
    return 'assets/users/' + this.user().avatar
  });
  
  onSelectUser(selectedUser: selectedUserInterface) {
    this.select.emit(selectedUser)
  }
}
