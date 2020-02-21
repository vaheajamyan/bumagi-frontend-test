import {Component, OnInit, Input} from '@angular/core';
import {IUser} from 'src/app/models/userModel';
import {MatDialog} from '@angular/material/dialog';
import {UpdateUserComponent} from '../update-user/update-user.component';
import {mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {UsersService} from 'src/app/services/users.service';
import {SelectOption} from 'src/app/models/selectOptionModel';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  baseUrl = environment.url;
  selectOption = Object.values(SelectOption);
  @Input() user: IUser;

  constructor(private dialog: MatDialog, private usersService: UsersService) {
  }

  ngOnInit(): void {
  }

  editUser() {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data: this.user,
      disableClose: true,
      width: '916px',
      height: '573px'
    });

    dialogRef.afterClosed()
      .pipe(
        mergeMap(user => {
          if (user) {
            return this.usersService.updateUser(user, this.user.id);
          }
          return of(null);
        }),
      )
      .subscribe((res: IUser) => {
        if (res) {
          this.user = {
            ...this.user,
            ...res
          };
        }
      });
  }

}
