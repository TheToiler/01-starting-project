import { Component, signal } from '@angular/core';

// import custom components
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

interface selectedUserInterface {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = signal<selectedUserInterface | undefined>(undefined);

  userSelected(selectedUser: selectedUserInterface) {
    console.log('User is selected!', selectedUser);
    this.selectedUser.set(selectedUser);
  }
}
