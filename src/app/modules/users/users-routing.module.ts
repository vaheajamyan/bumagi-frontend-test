import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersPage} from 'src/app/pages/users/users.component';
import {UsersGuard} from './users.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
    canActivate: [UsersGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
