import {NgModule} from '@angular/core';

import {UsersRoutingModule} from './users-routing.module';
import {UsersPage} from 'src/app/pages/users/users.component';
import {SharedModule} from '../shared/shared.module';
import {UsersListComponent} from 'src/app/components/users-list/users-list.component';
import {UserComponent} from 'src/app/components/users-list/user/user.component';
import {UpdateUserComponent} from 'src/app/components/users-list/update-user/update-user.component';


@NgModule({
  declarations: [UsersPage, UsersListComponent, UserComponent, UpdateUserComponent],
  imports: [
    SharedModule,
    UsersRoutingModule
  ]
})
export class UsersModule {
}
